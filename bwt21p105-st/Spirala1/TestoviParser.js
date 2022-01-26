class TestoviParser {
    static dajTacnost(stringReport) {
        let jsonReport;
        try {
            jsonReport = JSON.parse(stringReport);
        } catch (e) {
            return JSON.stringify({
                tacnost: '0%',
                greske: ['Testovi se ne mogu izvršiti']
            });
        }
        if (!jsonReport || !jsonReport.stats || !jsonReport.stats.passes
            || !jsonReport.stats.tests || !Array.isArray(jsonReport.failures)) {
            return JSON.stringify({
                tacnost: '0%',
                greske: ['Testovi se ne mogu izvršiti']
            });
        }
        const tacnost = jsonReport.stats.passes / jsonReport.stats.tests;
        const greske = jsonReport.failures.map(({title}) => title);
        return JSON.stringify({tacnost: `${tacnost * 100}%`, greske});
    }

    //ZADATAK3
    static porediRezultate(stringReport1, stringReport2) {
        let jsonReport1, jsonReport2;

        try {
jsonReport1 = JSON.parse(stringReport1);
        jsonReport2 = JSON.parse(stringReport2);
        } catch (e) {
            return JSON.stringify({
                tacnost: '0%',
                greske: ['Testovi se ne mogu izvršiti']
            });
        }

        if (!jsonReport1 || !Array.isArray(jsonReport1.tests) ||
            !jsonReport2 || !Array.isArray(jsonReport2.tests) ||
            !jsonReport2.stats || !jsonReport2.stats.passes || !jsonReport2.stats.tests ||
            !Array.isArray(jsonReport1.failures) || !Array.isArray(jsonReport2.failures)) {
            return JSON.stringify({
                tacnost: '0%',
                greske: ['Testovi se ne mogu izvršiti']
            });
        }

        let identicni = jsonReport1.tests.length === jsonReport2.tests.length;
        if (identicni) {
            // Testovi mogu biti isti, samo da su u drugačijem rasporedu, zato se sortiraju, pa tako porede.
            const naziviTestova1 = jsonReport1.tests.map(({title}) => title).sort();
            const naziviTestova2 = jsonReport2.tests.map(({title}) => title).sort();
            for (let i = 0; i < naziviTestova1.length; i++) {
                if (naziviTestova1[i] !== naziviTestova2[i]) {
                    identicni = false;
                    break;
                }
            }
        }
        if (identicni) {
            const tacnost = jsonReport2.stats.passes / jsonReport2.stats.tests;
            const greske = jsonReport1.failures.map(({title}) => title);
            return JSON.stringify({tacnost: `${tacnost * 100}%`, greske: greske.sort()});
        }
        const naziviTestova2 = jsonReport2.tests.map(({title}) => title).sort();
        const testoviKojiPadaju1 = jsonReport1.failures.filter(({title}) => !naziviTestova2.includes(title));

        const tacnost = (testoviKojiPadaju1.length + jsonReport2.failures.length) / (testoviKojiPadaju1.length + jsonReport2.tests.length);
        const greske = [...testoviKojiPadaju1.map(({title}) => title), ...jsonReport2.failures.map(({title}) => title)];
        return JSON.stringify({tacnost: `${tacnost * 100}%`, greske: greske.sort()});
    }
}

