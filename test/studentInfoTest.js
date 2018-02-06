// testing for student info
// shows that student info is in a JSON
var assert = require('assert');;
var chai = require('chai');
var students = require('../src/data/students.js');

describe("The existence of a JSON", function() {

    it("The JSON should exist", function() {
        chai.expect(students).to.exist;
    });

    it("All the students have expected resumes.", function(){
        for(var i = 0; i < students.length; i++)
            chai.expect(students[i]).to.have.property("resume");
    });
});
