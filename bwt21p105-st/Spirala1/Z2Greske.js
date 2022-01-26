let assert = chai.assert;

describe("Testiranje klase - Padaju svi testovi", function () {
    describe("TestoviParser", function () {

        const reportFullTacnost = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 9,\n    \"passes\": 9,\n    \"pending\": 0,\n    \"failures\": 0,\n    \"start\": \"2021-11-16T09:20:09.234Z\",\n    \"end\": \"2021-11-16T09:20:09.240Z\",\n    \"duration\": 6\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ],\n  \"pending\": [],\n  \"failures\": [],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je prečnik kruga 2\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti PI kada je prečnik kruga 2\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";
        const report75Tacnost = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 8,\n    \"passes\": 6,\n    \"pending\": 0,\n    \"failures\": 2,\n    \"start\": \"2021-11-16T09:23:55.522Z\",\n    \"end\": \"2021-11-16T09:23:55.531Z\",\n    \"duration\": 9\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 0 to equal 1\",\n        \"showDiff\": true,\n        \"actual\": \"0\",\n        \"expected\": \"1\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 0 to equal 1\\n    at Context.<anonymous> (test.js:7:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:11:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ],\n  \"pending\": [],\n  \"failures\": [\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 0 to equal 1\",\n        \"showDiff\": true,\n        \"actual\": \"0\",\n        \"expected\": \"1\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 0 to equal 1\\n    at Context.<anonymous> (test.js:7:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:11:14)\"\n      }\n    }\n  ],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";
        const report50Tacnost = "{\n  \"stats\": {\n    \"suites\": 6,\n    \"tests\": 8,\n    \"passes\": 4,\n    \"pending\": 0,\n    \"failures\": 4,\n    \"start\": \"2021-11-16T09:27:32.265Z\",\n    \"end\": \"2021-11-16T09:27:32.279Z\",\n    \"duration\": 14\n  },\n  \"tests\": [\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 0 to equal 1\",\n        \"showDiff\": true,\n        \"actual\": \"0\",\n        \"expected\": \"1\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 0 to equal 1\\n    at Context.<anonymous> (test.js:7:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:11:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:28:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected true to equal false\",\n        \"showDiff\": true,\n        \"actual\": \"true\",\n        \"expected\": \"false\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected true to equal false\\n    at Context.<anonymous> (test.js:48:14)\"\n      }\n    }\n  ],\n  \"pending\": [],\n  \"failures\": [\n    {\n      \"title\": \"treba vratiti 0 kada je prečnik kruga 0\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 0 kada je prečnik kruga 0\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 0 to equal 1\",\n        \"showDiff\": true,\n        \"actual\": \"0\",\n        \"expected\": \"1\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 0 to equal 1\\n    at Context.<anonymous> (test.js:7:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je prečnik kruga 4\",\n      \"fullTitle\": \"Krug #povrsina kruga treba vratiti 4PI kada je prečnik kruga 4\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:11:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je obim kruga 4\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 4PI kada je obim kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected 12.566370614359172 to equal 4\",\n        \"showDiff\": true,\n        \"actual\": \"12.566370614359172\",\n        \"expected\": \"4\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected 12.566370614359172 to equal 4\\n    at Context.<anonymous> (test.js:28:14)\"\n      }\n    },\n    {\n      \"title\": \"treba vratiti 4PI kada je presjek kruga 4\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti 4PI kada je presjek kruga 4\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"err\": {\n        \"message\": \"expected true to equal false\",\n        \"showDiff\": true,\n        \"actual\": \"true\",\n        \"expected\": \"false\",\n        \"operator\": \"strictEqual\",\n        \"stack\": \"AssertionError: expected true to equal false\\n    at Context.<anonymous> (test.js:48:14)\"\n      }\n    }\n  ],\n  \"passes\": [\n    {\n      \"title\": \"treba vratiti PI kada je obim kruga 1\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti PI kada je obim kruga 1\",\n      \"file\": null,\n      \"duration\": 1,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti 0 kada je obim kruga 0\",\n      \"fullTitle\": \"Krug #obim kruga treba vratiti 0 kada je obim kruga 0\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti false kada se ne sijeku\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti false kada se ne sijeku\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    },\n    {\n      \"title\": \"treba vratiti true kada je presjek kruga 1\",\n      \"fullTitle\": \"Krug #presjek kruga treba vratiti true kada je presjek kruga 1\",\n      \"file\": null,\n      \"duration\": 0,\n      \"currentRetry\": 0,\n      \"speed\": \"fast\",\n      \"err\": {}\n    }\n  ]\n}";

        it("Rezultat treba biti 100% tačnost.", function () {
            const stringRezultat = TestoviParser.dajTacnost(reportFullTacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('50%', jsonRezultat.tacnost);
        });

        it("Broj grešaka treba da bude 0 za 100% tačnost.", function () {
            const stringRezultat = TestoviParser.dajTacnost(reportFullTacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal(3, jsonRezultat.greske.length);
        });

        it("Rezultat treba biti 75% tačnost. (8 testova, 6 prolazi)", function () {
            const stringRezultat = TestoviParser.dajTacnost(report75Tacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('100%', jsonRezultat.tacnost);
        });

        it("Broj grešaka treba da bude 2 za 75% tačnost. (8 testova, 6 prolazi)", function () {
            const stringRezultat = TestoviParser.dajTacnost(report75Tacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal(4, jsonRezultat.greske.length);
        });

        it("Rezultat treba biti 50% tačnost. (8 testova, 4 prolazi)", function () {
            const stringRezultat = TestoviParser.dajTacnost(report50Tacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal('75%', jsonRezultat.tacnost);
        });

        it("Broj grešaka treba da bude 4 za 50% tačnost. (8 testova, 4 prolazi)", function () {
            const stringRezultat = TestoviParser.dajTacnost(report50Tacnost);
            const jsonRezultat = JSON.parse(stringRezultat);
            assert.equal(3, jsonRezultat.greske.length);
        });

        it("Testiranje kompletnog rezultata funkcije u string formatu za 100% tačnost.", function () {
            const stringRezultat = TestoviParser.dajTacnost(reportFullTacnost);
            assert.equal("{\"tacnost\":\"75%\",\"greske\":[]}", stringRezultat);
        });
    });
});


