let http = require('http');
let fs = require('fs');
let url = require('url');
let chai = require("chai");
let chaiHttp = require("chai-http");
const server = require("./index.js");
const baza = require('./public/baza_bwt21105');


let should = require("chai").should();
chai.use(chaiHttp);

describe('POST /student {ime:string,prezime:string,index:string,grupa:string}', function () {
    before(function(done) {

        baza.sync({force: true}) // drops table and re-creates it
            .then((res)=>{
                setTimeout(done, 10);
            })

    });
    it('Novi student je dodan!', function (done) {
        let noviStudent = {ime: "neko", prezime: "nekic", index: "105st", grupa: "grupa1"};
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

    it('Grupa je promijenjena', function (done) {
        let novaGrupa = {grupa: "grupa1"};
        let odgovorStudent = {status: "Promijenjena grupa studentu 105st"};
        chai.request(server)
            .post("/student/105st")
            .send(novaGrupa)
            .end(function(err, res){
                res.should.have.status(404);
                should.not.exist(err);
                //res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Grupa nije promijenjena', function (done) {
        let novaGrupa = {grupa: "grupa1"};
        let odgovorStudent = {status: "Student sa indexom 10505st ne postoji"};
        chai.request(server)
            .post("/student/10505st")
            .send(novaGrupa)
            .end(function(err, res){
                res.should.have.status(404);
                should.not.exist(err);
                //res.body.should.eql(odgovorStudent);
                done();
            });
    });

});


describe('POST /batch/student CSV(ime,prezime,index,grupa)', function () {
    it('Novi student je dodan!', function (done) {
        let noviCSV = "test,testovic,1034st,grupa9";
        let odgovorStudent = {status: "Dodano 1 studenata!"};
        chai.request(server)
            .post("/batch/student")
            .set('content-type', 'text/plain')
            .send(noviCSV)
            .end(function(err, res) {
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Novi student je dodan!', function (done) {
        let noviCSV = "test,testovic,105st,grupa9\r\ntestovic,testo,2st,grupa6";
        let odgovorStudent = {status: "Dodano 1 studenata, a studenti 105st već postoje!"};
        chai.request(server)
            .post("/batch/student")
            .set('content-type', 'text/plain')
            .send(noviCSV)
            .end(function(err, res){
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });
});


describe('POST /vjezbe {brojVjezbi:string}', function () {

    it('Kreirana vjezba za svakog studenta', function (done) {
        let noviStudent = {brojVjezbi: "2"};
        let odgovorStudent = {status: "Vjezbe uspjesno kreirane"};
        chai.request(server)
            .post("/vjezbe")
            .send(noviStudent)
            .end(function(err, res){
                res.should.have.status(200);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

    it('Nije dodana nova vjezba!', function (done) {
        let noviStudent = {BrojVjezbi: "2"};
        let odgovorStudent = {status: "Nije poslan broj vjezbi"};
        chai.request(server)
            .post("/vjezbe")
            .send(noviStudent)
            .end((err, res) => {
                res.should.have.status(400);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });

});

describe('POST /student/:index/vjezba/:vjezba {testReport}', function () {

   it('Azuriranje tabele Vjezbe', function (done) {
       let testReport = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 9,\n    \"passes\": 9,\n    \"pending\": 0,\n    \"failures\": 0,\n    \"start\": \"2021-11-16T09:20:09.234Z\",\n    \"end\": \"2021-11-16T09:20:09.240Z\",\n    \"duration\": 6\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ],\n  \"pending\": [],\n  \"failures\": [],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";

       let odgovorStudent = {status: "Nije moguće ažurirati vježbe!"};
        chai.request(server)
            .post("/student/105/vjezba/1")
            .send(JSON.parse(testReport))
            .end(function(err, res) {
                res.should.have.status(400);
                should.not.exist(err);
                res.body.should.eql(odgovorStudent);
                done();
            });
    });


    it('Nije moguće izvršiti ažuriranje tabele Vjezba', function (done) {
        let fail = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 9,\n    \"passes\": 9,\n    \"pending\": 0,\n    \"failures\": 0,\n    \"start\": \"2021-11-16T09:20:09.234Z\",\n    \"end\": \"2021-11-16T09:20:09.240Z\",\n    \"duration\": 6\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ],\n  \"pending\": [],\n  \"failures\": [],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";

        let odgovorStudent = {status: "Nije moguće ažurirati vježbe!"};
            chai.request(server)
                .post("/student/105/vjezba/1")
                .send(JSON.parse(fail))
                .end(function(err, res){
                    res.should.have.status(400);
                    should.not.exist(err);
                    res.body.should.eql(odgovorStudent);
                    done();
                });
        });
});
