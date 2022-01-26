chai.should();

describe('Modul | AjaxPozivi', function() {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    describe('Funkcija | posaljiStudent', function() {
        it('Metoda POST | Podaci se nalaze u tijelu zahtjeva', function(done) {
            const data = { ime: 'Harun', prezime: 'Kolos', index: '12345', grupa: 'BWT' };
            const dataJson = JSON.stringify(data);

            AjaxPozivi.posaljiStudent(data, function() { });

            this.requests[0].requestBody.should.equal(dataJson);

            done();
        });

       it('Metoda POST | Uspjesan odgovor servera', function(done) {
           const data = { ime: 'Harun', prezime: 'Kolos', index: '12345', grupa: 'BWT' };
           const response = {status: 'Kreiran student!'};
           const responseJson = JSON.stringify(response);

           AjaxPozivi.posaljiStudent(data, function(err, res) {
               res.should.deep.equal(response.status);
               done();
           });

           this.requests[0].respond(200, { 'Content-Type': 'application/json' }, responseJson);
       });

        it('Metoda POST | Neuspjesan odgovor servera', function(done) {
            const data = { ime: 'Harun', prezime: 'Kolos' };
            const response = {status: 'Student nije u ispravnom formatu'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.posaljiStudent(data, function(err) {
                err.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(400, { 'Content-Type': 'application/json' }, responseJson);
        });
    });


    describe('Funkcija | postaviGrupu', function() {
    it('Metoda PUT | Podaci se nalaze u tijelu zahtjeva', function(done) {
        const data = { index: '12345' };
        const data2 = { grupa: 'BWT' };
        const dataJson = JSON.stringify(data2);

        AjaxPozivi.postaviGrupu(data,data2, function() { });

        this.requests[0].requestBody.should.equal(dataJson);

        done();
    });

    it('Metoda PUT | Uspjesan odgovor servera', function(done) {
        const data = { index: '12345' };
        const data2 = { grupa: 'BWT' };
        const response = {status: 'Promijenjena grupa studentu 12345'};
        const responseJson = JSON.stringify(response);

        AjaxPozivi.postaviGrupu(data,data2, function(err, res) {
            res.should.deep.equal(response.status);
            done();
        });

        this.requests[0].respond(200, { 'Content-Type': 'application/json' }, responseJson);
    });

    it('Metoda PUT | Neuspjesan odgovor servera', function(done) {
        const data = { index: '5555'};
        const data2 = { grupa: 'BWT' };
        const response = {status: 'Student sa indexom 5555 ne postoji'};
        const responseJson = JSON.stringify(response);

        AjaxPozivi.postaviGrupu(data,data2, function(err) {
            err.should.deep.equal(response.status);
            done();
        });

        this.requests[0].respond(400, { 'Content-Type': 'application/json' }, responseJson);
    });
});


    describe('Funkcija | posaljiStudente', function() {
        it('Metoda POST | Podaci se nalaze u tijelu zahtjeva', function(done) {
            const data = 'HARUN,KOLOS,105,BWT\nHARUN,KOLOS,55,BWT\nHARUN,KOLOS,66,BWT\nHARUN,KOLOS,77,BWT';
            //const dataJson = JSON.stringify(data);

            AjaxPozivi.posaljiStudente(data, function() { });

            this.requests[0].requestBody.should.equal(data);

            done();
        });

        it('Metoda POST | Uspjesan odgovor servera', function(done) {
            const data = 'HARUN,KOLOS1,105,BWT\nHARUN,KOLOS2,100,BWT\nHARUN,KOLOS3,99,BWT';
           // const data = { ime: 'Harun', prezime: 'Kolos', index: '12345', grupa: 'BWT' };
            const response = {status: 'Kreiran student!'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.posaljiStudente(data, function(err, res) {
                res.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(200, { 'Content-Type': 'application/json' }, responseJson);
        });

        it('Metoda POST | Neuspjesan odgovor servera', function(done) {
            const data = 'HARUN,KOLOS'
            //const data = { ime: 'Harun', prezime: 'Kolos' };
            const response = {status: 'Student nije u ispravnom formatu'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.posaljiStudente(data, function(err) {
                err.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(400, { 'Content-Type': 'application/json' }, responseJson);
        });
    });


    describe('Funkcija | postaviVjezbe', function() {
        it('Metoda POST | Podaci se nalaze u tijelu zahtjeva', function(done) {
            const data = {brojVjezbi: '2'};
            const dataJson = JSON.stringify(data);

            AjaxPozivi.postaviVjezbe(data, function() { });

            this.requests[0].requestBody.should.equal(dataJson);

            done();
        });

        it('Metoda POST | Uspjesan odgovor servera', function(done) {
            const data = { brojVjezbi: '5' };
            const response = {status: 'Vjezbe uspjesno kreirane'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.postaviVjezbe(data, function(err, res) {
                res.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(200, { 'Content-Type': 'application/json' }, responseJson);
        });

        it('Metoda POST | Neuspjesan odgovor servera', function(done) {
            const data = { brojVjezbi: 'Harun' };
            const response = {status: 'Nije poslan broj vjezbi'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.posaljiStudente(data, function(err) {
                err.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(400, { 'Content-Type': 'application/json' }, responseJson);
        });
    });

    describe('Funkcija | postaviTestReport', function() {
        it('Metoda POST | Podaci se nalaze u tijelu zahtjeva', function(done) {

            const data = { index: '105'};
            const data2 = { brojVjezbi: '2'};
            const data3 = 30;


            AjaxPozivi.postaviTestReport(data,data2,data3, function() { });

            this.requests[0].requestBody.should.equal('30');

            done();
        });

        it('Metoda POST | Uspjesan odgovor servera', function(done) {
            const data = { index: '105'};
            const data2 = { brojVjezbi: '2'};
            const data3 = { tacnost: '100%' };
            const response = {status: 'Uspjesno'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.postaviTestReport(data,data2,data3, function(err, res) {
                res.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(200, { 'Content-Type': 'application/json' }, responseJson);
        });

        it('Metoda POST | Neuspjesan odgovor servera', function(done) {
            const data = { index: '105'};
            const data2 = { brojVjezbi: '2'};
            const data3 = { promjena: '0%' };
            const response = {status: 'Testovi se ne mogu izvršiti'};
            const responseJson = JSON.stringify(response);

            AjaxPozivi.postaviTestReport(data,data2,data3, function(err) {
                err.should.deep.equal(response.status);
                done();
            });

            this.requests[0].respond(400, { 'Content-Type': 'application/json' }, responseJson);
        });
    });

});

