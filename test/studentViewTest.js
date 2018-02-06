// webdriver setup
require('chromedriver');
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build();

var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(driver));
var students = require('../src/data/students.js');
var fs = require("fs");

driver.get("http://localhost:3000");

// test cases for views
describe("The existence of certain pages.", function() {
    it("The website has a landing page", function(done) {
        chai.expect('#app-content h2').dom.to.have.text("Listing of Students");
        done();
    });
    it("Students can be sorted by Major, in subcategories.", function(done) {
        chai.expect('#app-container home').dom.to.have.text("Filter By Major");
        chai.expect('#app-container home').dom.to.have.text("Cyber Engineering");
        chai.expect('#app-container home').dom.to.have.text("Mathematics");
        chai.expect('#app-container home').dom.to.have.text("Chemistry");
        chai.expect('#app-container home').dom.to.have.text("Computer Science");
        done();
    });
});