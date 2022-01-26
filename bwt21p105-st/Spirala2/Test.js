let http = require('http');
let fs = require('fs');
let url = require('url');
let chai = require("chai");
let chaiHttp = require("chai-http");
const server = require("./index.js");


let should = require("chai").should();
chai.use(chaiHttp);

describe('POST /student {ime:string,prezime:string,index:string,grupa:string}', function () {
    beforeEach(function (done) {
        fs = require('fs');
        fs.writeFile('studenti.csv', 'harun,kolos,105st,grupa2', function () {
        });
        done();
    });
    afterEach(function (done) {
        delete require.cache[require.resolve('fs')];
        done()
    });
    it('Novi student je dodan!', function (done) {
        let noviStudent = {ime: "neko", prezime: "nekic", index: "1000st", grupa: "grupa1"};
        let odgovorStudent = {status: "Kreiran student!"};
        chai.request(server)
            .post("/student")
            .send(noviStudent)
            .end((err, res) => {
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Nije dodan novi student!', function (done) {
        let noviStudent = {ime: "neko", prezime: "nekic", index: "105st", grupa: "grupa1"};
        let odgovorStudent = {status: "Student sa indexom 105st vec postoji"};
        chai.request(server)
            .post("/student")
            .send(noviStudent)
            .end((err, res) => {
                res.should.have.status(400);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

});


describe('PUT /student/:index {grupa:string}', function () {
    beforeEach(function (done) {
        fs = require('fs');
        fs.writeFile('studenti.csv', 'harun,kolos,105st,grupa2', function () {
        });
        done();
    });
    afterEach(function (done) {
        delete require.cache[require.resolve('fs')];
        done()
    });
    it('Grupa je promijenjena', function (done) {
        let novaGrupa = {grupa: "grupa1"};
        let odgovorStudent = {status: "Promijenjena grupa studentu 105st"};
        chai.request(server)
            .post("/student/105st")
            .send(novaGrupa)
            .end(function(err, res) {
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Grupa nije promijenjena', function (done) {
        let novaGrupa = {grupa: "grupa1"};
        let odgovorStudent = {status: "Student sa indexom 10505st ne postoji"};
        chai.request(server)
            .post("/student/10505st")
            .send(novaGrupa)
            .end((err, res) => {
                res.should.have.status(404);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

});


describe('POST /batch/student CSV(ime,prezime,index,grupa)', function () {
    beforeEach(function (done) {
        fs = require('fs');
        fs.writeFile('studenti.csv', 'harun,kolos,105st,grupa2', function () {
        });
        done();
    });
    afterEach(function (done) {
        delete require.cache[require.resolve('fs')];
        done()
    });
    it('Novi student je dodan!', function (done) {
        let noviCSV = "test,testovic,1034st,grupa9";
        let odgovorStudent = {status: "Dodan 1 student!"};
        chai.request(server)
            .post("/batch/student")
            .send(noviCSV)
            .end((err, res) => {
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Novi student je dodan!', function (done) {
        let noviCSV = "test,testovic,105st,grupa9\r\ntestovic,testo,2st,grupa6";
        let odgovorStudent = {status: "Dodano 1 studenata,a studenti 105st vec postoji"};
        chai.request(server)
            .post("/batch/student")
            .send(noviCSV)
            .end((err, res) => {
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });
});
