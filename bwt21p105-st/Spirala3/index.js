const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const TestoviParser = require('../public/TestoviParser');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.text());
server.use(express.static('public'));

server.post('/student', (req, res) => {
    const body = req.body;
    const {ime, prezime, index, grupa} = body;
    if (!ime || !prezime || !index || !grupa) return res.status(400).send({status: 'Student nije u ispravnom formatu'});
    fs.readFile('studenti.csv', 'utf8', (error, data) => {
        if (error) {
            fs.writeFile('studenti.csv', `${ime},${prezime},${index},${grupa}\n`, (error) => {
                if (error) return res.status(400).send({status: 'Nešto nije uredu sa kreiranjem studenti.csv datoteke'});
                res.send({status: 'Kreiran student!'});
            });
        } else {
            const rows = data.split(/\r?\n/);
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].split(',');
                if (columns.length !== 4) continue;
                if (columns[2] === index) return res.status(400).send({status: `Student sa indexom ${index} vec postoji`});
            }
            fs.appendFile('studenti.csv', `${ime},${prezime},${index},${grupa}\n`, (error) => {
                if (error) return res.status(400).send({status: 'Nešto nije uredu sa kreiranjem novog studenta'});
                res.send({status: 'Kreiran student!'});
            });
        }
    });
});

server.put('/student/:index', (req, res) => {
    const body = req.body;
    const {grupa} = body;
    if (!grupa || !req.params.index) return res.status(400).send({status: 'Student nije u ispravnom formatu'});
    fs.readFile('studenti.csv', 'utf8', (err, data) => {
        if (err) return res.status(400).send({status: 'Nešto nije uredu sa datotekom studenti.csv'});
        const rows = data.split(/\r?\n/);
        let index = -1;
        for (let i = 0; i < rows.length; i++) {
            const columns = rows[i].split(',');
            if (columns.length !== 4) continue;
            if (columns[2] === req.params.index) index = i;
        }
        if (index === -1) return res.status(400).send({status: `Student sa indexom ${req.params.index} ne postoji`});
        const columns = rows[index].split(",");
        rows[index] = `${columns[0]},${columns[1]},${columns[2]},${grupa}`;
        let newCsv = '';
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].split(",").length === 4) newCsv += `${rows[i]}\n`;
        }
        fs.writeFile('studenti.csv', newCsv, (err, data) => {
            if (err) return res.status(400).send({status: 'Nešto nije uredu sa uređivanjem datoteke studenti.csv'});
            res.send({status: `Promijenjena grupa studentu ${req.params.index}`});
        });
    });
});

server.post('/vjezbe', (req, res) => {
    const body = req.body;
    const {brojVjezbi} = body;
    if (!brojVjezbi) return res.status(400).send({status: 'Nije poslan broj vjezbi'});
    fs.readFile('studenti.csv', 'utf8', (err, data) => {
        if (err) return res.status(400).send({status: 'Nešto nije uredu sa datotekom studenti.csv'});
        const rows = data.split(/\r?\n/);
        let vjezbeCsv = '';
        for (let i = 0; i < rows.length; i++) {
            const columns = rows[i].split(",");
            if (columns.length !== 4) continue;
            const index = columns[2];
            for (let j = 1; j <= brojVjezbi; j++) {
                vjezbeCsv += `${index},${j},0%,0%,[],[]\n`;
            }
        }
        fs.writeFile('vjezbe.csv', vjezbeCsv, (err) => {
            if (err) return res.status(400).send({status: 'Nešto nije uredu sa kreiranjem datoteke vjezbe.csv'});
            res.send({status: 'Vjezbe uspjesno kreirane'});
        });
    });
});

server.post('/student/:index/vjezba/:vjezba', (req, res) => {
    const testReport = req.body;
    if (!req.params.index || !req.params.vjezba) return res.status(400).send({status: 'Nije poslan index ili vjezbe'});
    fs.readFile('vjezbe.csv', 'utf8', (err, data) => {
        if (err) return res.status(400).send({status: 'Nešto nije uredu sa datotekom vjezbe.csv'});
        const rows = data.split(/\r?\n/);
        let index = -1;
        for (let i = 0; i < rows.length; i++) {
            const columns = rows[i].split(",");
            if (columns[0] === req.params.index && columns[1] === req.params.vjezba) {
                index = i;
                break;
            }
        }

        if (index === -1) return res.status(400).send({status: 'Nije moguće ažurirati vježbe!'});
        const columns = rows[index].split(",");
        if (columns[5] === "[]") {
            const testReportStringify = JSON.stringify(testReport);
            const rez = JSON.parse(TestoviParser.dajTacnost(testReportStringify));
            rows[index] = `${columns[0]},${columns[1]},${rez.tacnost},0%,[${rez.greske.map(greska => `'${greska}'`)}],[${testReport.tests.map(({fullTitle}) => `'${fullTitle}'`)}]`;
            let newCsv = '';
            for (let i = 0; i < rows.length; i++) {
                if (i === index) {
                    newCsv += `${rows[i]}\n`;
                    continue;
                }
                if (rows[i].split(",").length === 6) newCsv += `${rows[i]}\n`;
            }
            fs.writeFile('vjezbe.csv', newCsv, (err, data) => {
                if (err) return res.status(400).send({status: 'Nešto nije uredu sa uređivanjem datoteke vjezbe.csv'});
                res.send({
                    vjezba: req.params.vjezba,
                    tacnost: rez.tacnost,
                    promjena: '0%',
                    greske: rez.greske
                });
            });
        } else {
            res.send({status: 'Nejasna implementacija'});
        }
    });
});
server.post('/batch/student', (req, res) => {
    const primljeniCsv = req.body;
    fs.readFile('studenti.csv', 'utf8', (err, data) => {
        if (err) {
            let csv = '';
            const rows = primljeniCsv.split(/\r?\n/);
            let N = 0;
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].split(",");
                if (columns.length !== 4) continue;
                let vecPostoji = false;
                for (let j = i - 1; j >= 0; j--) {
                    const tempColumns = rows[j].split(",");
                    if (tempColumns.length !== 4) continue;
                    if (tempColumns[2] === columns[2]) {
                        vecPostoji = true;
                        break;
                    }
                }
                if (vecPostoji) continue;
                csv += `${rows[i]}\n`;
                N++;
            }
            fs.writeFile('studenti.csv', csv, (err) => {
                if (err) return res.status(400).send({status: 'Nešto nije uredu sa kreiranjem datoteke studenti.csv'});
                return res.send({status: `Dodano ${N} studenata!`});
            });
        } else {
            const vecPostoje = [];
            let csv = '';
            const rows = primljeniCsv.split(/\r?\n/);
            const oldRows = data.split(/\r?\n/);
            let N = 0;
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].split(",");
                if (columns.length !== 4) continue;
                let vecPostoji = false;
                for (let j = i - 1; j >= 0; j--) {
                    const tempColumns = rows[j].split(",");
                    if (tempColumns.length !== 4) continue;
                    if (tempColumns[2] === columns[2]) {
                        vecPostoji = true;
                        break;
                    }
                }
                if (vecPostoji) continue;
                for (let j = 0; j < oldRows.length; j++) {
                    const tempColumns = oldRows[j].split(",");
                    if (tempColumns.length !== 4) continue;
                    if (tempColumns[2] === columns[2]) {
                        vecPostoje.push(tempColumns[2]);
                        vecPostoji = true;
                        break;
                    }
                }
                if (vecPostoji) continue;
                csv += `${rows[i]}\n`;
                N++;
            }
            fs.appendFile('studenti.csv', csv, (err) => {
                if (err) return res.status(400).send({status: 'Nešto nije uredu sa kreiranjem datoteke studenti.csv'});
                if (!vecPostoje.length) {
                    return res.send({status: `Dodano ${N} studenata!`});
                } else {
                    return res.send({status: `Dodano ${N} studenata, a studenti ${vecPostoje} već postoje!`});
                }
            });
        }
    });
});

server.listen(3000, () => {
    console.log("Pokrenut 'localhost:3000' server na portu 3000");
});
