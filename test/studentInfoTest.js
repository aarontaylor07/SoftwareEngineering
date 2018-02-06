// testing for student info
// shows that student info is in a JSON, with resumes
// shows that students have resumes that are on the backend
var assert = require('assert');
var chai = require('chai');
var students = require('../src/data/students.js');
var fs = require("fs");

describe("The existence of a JSON with student info and a resume.", function() {

    it("JSON is implementable across scope of project", function(done) {
        chai.expect(students).to.exist;
        done();
    });

    it("All the students have downloadable resumes.", function(done){
        for(var i = 0; i < students.length; i++)
            chai.expect(students[i]).to.have.property("piss");
        done();
    });

    it("Resumes are stored are on the server side of the system", function(done){
        var existenceOfResume = [];
        for(var i = 0; i < students.length; i++)
        {
            var pathToResume = "../src/static/resumes/" + students[i].resume;
            fs.exists(pathToResume, function(exists){
                existenceOfResume[i] = true;
            });
            chai.expect(existenceOfResume[i]).to.be.true;
        }
        done();
    });
});