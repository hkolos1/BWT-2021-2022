let assert = chai.assert;

describe("Testiranje klase - Testovi se ne mogu izvršiti", function () {
    describe("TestoviParser", function () {

        const rezultatPrazanString = "";
        const rezultatNemaFailuresPolje = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 8,\n    \"passes\": 4,\n    \"pending\": 0,\n    \"failures\": 4,\n    \"start\": \"2021-11-16T09:27:32.265Z\",\n    \"end\": \"2021-11-16T09:27:32.279Z\",\n    \"duration\": 14\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 0 to equal 1\",\n        \"showDiff\": true,\n        \"actual\": \"0\",\n        \"expected\": \"1\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 0 to equal 1\\n    at Context.<anonymous> (test.js:7:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:11:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:28:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected true to equal false\",\n        \"showDiff\": true,\n        \"actual\": \"true\",\n        \"expected\": \"false\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected true to equal false\\n    at Context.<anonymous> (test.js:48:14)\"\n      }\n    }\n  ],\n  \"pending\": [],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";

        it("Tačnost nula, za report poslan prazan string.", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatPrazanString, rezultatPrazanString);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('0%', jsonRezultat.tacnost);
        });

        it("Poruka da se testovi ne mogu izvršiti, za report poslan prazan string.", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatPrazanString, rezultatPrazanString);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('Testovi se ne mogu izvršiti', jsonRezultat.greske[0]);
        });

        it("Broj grešaka bi trebao biti 1, za report poslan prazan string.", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatPrazanString, rezultatPrazanString);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal(1, jsonRezultat.greske.length);
        });

        it("Tačnost nula, u reportu fali polje \"failures\".", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatNemaFailuresPolje, rezultatNemaFailuresPolje);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('0%', jsonRezultat.tacnost);
        });

        it("Poruka da se testovi ne mogu izvršiti, u reportu fali polje \"failures\".", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatNemaFailuresPolje, rezultatNemaFailuresPolje);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('Testovi se ne mogu izvršiti', jsonRezultat.greske[0]);
        });

        it("Broj grešaka bi trebao biti 1, u reportu fali polje \"failures\".", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatNemaFailuresPolje, rezultatNemaFailuresPolje);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal(1, jsonRezultat.greske.length);
        });

        it("Tesiranje string rezultata funkcije, u reportu fali polje \"failures\".", function () {
            const stringRezultat = TestoviParser.porediRezultate(rezultatNemaFailuresPolje, rezultatNemaFailuresPolje);
            assert.equal("{\"tacnost\":\"0%\",\"greske\":[\"Testovi se ne mogu izvršiti\"]}", stringRezultat);
        });
    });
});


