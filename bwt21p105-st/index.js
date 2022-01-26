const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const TestoviParser = require('./public/TestoviParser');
const baza = require('./public/baza_bwt21105');
const {col} = require("sequelize");

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.text());
server.use(express.static('public'));

const validirajParametre = (body, props) => {
    for(let i = 0; i < props.length; i++) {
        if( !Object.keys(body).includes(props[i]) || !body[props[i]] )
            return false;
    }
    return true;
}

server.post('/student', async (req, res) => {
    const body = req.body;
    if( !validirajParametre(body, ['ime', 'prezime', 'index', 'grupa']) )
        return res.status(400).send({status: 'Student nije u ispravnom formatu'});
    const {ime, prezime, index, grupa} = body;

    try {
        const studentData = await baza.Student.findAll({where: { index }});
        if(studentData.length) return res.status(400).send({status: `Student sa indexom ${index} vec postoji`});
        const grupaData = await baza.Grupa.findAll({where: { naziv: grupa }});
        if(!grupaData.length) await baza.Grupa.create({ naziv: grupa });
        await baza.Student.create({ ime, prezime, grupa, index });
        res.send({status: 'Kreiran student!'});
    } catch(greska) {
        res.status(400).send({status: 'Nešto nije uredu sa bazom'});
    }
});

server.put('/student/:index', async (req, res) => {
    const body = req.body;
    const params = req.params;

    if( !validirajParametre(body, ['grupa']) || !validirajParametre(params, ['index']) )
        return res.status(400).send({status: 'Student nije u ispravnom formatu'});
    const {grupa} = body;
    const {index} = params;
    try {
        const studentData = await baza.Student.findAll({where: { index }});
        if(!studentData.length) return res.status(400).send({status: `Student sa indexom ${req.params.index} ne postoji`});
        const grupaData = await baza.Grupa.findAll({where: { naziv: grupa }});
        if(!grupaData.length) await baza.Grupa.create({ naziv: grupa });
        studentData[0].grupa = grupa;
        await studentData[0].save();
        res.send({status: `Promijenjena grupa studentu ${index}`});
    } catch(greska) {
        res.status(400).send({status: 'Nešto nije uredu sa bazom'});
    }
});

const izdvojiStudente = (baza, csv, izdvojiPostojece) => {
    let studenti = [];
    let postoji = false;
    for(let i = 0; i < csv.length; i++) {
        postoji = false;
        for(let j = 0; j < baza.length; j++) {
            if( csv[i].index === baza[j].index ) {
                postoji = true;
                break;
            }
        }
        if(postoji && izdvojiPostojece) studenti.push(csv[i].index);
        if(!postoji && !izdvojiPostojece) studenti.push(csv[i]);
    }

    return studenti;
}

const izdvojiGrupe = (baza, studenti) => {
    let grupe = [];

    for(let i = 0; i < studenti.length; i++) {
        let postoji = false;
        for(let j = 0; j < baza.length; j++) {
            if( studenti[i].grupa === baza[j].naziv ) {
                postoji = true;
                break;
            }
        }
        for(let j = grupe.length - 1; j >= 0 ; j--) {
            if( grupe[j].naziv === studenti[i].grupa ) {
                postoji = true;
                break;
            }
        }
        if(!postoji) grupe.push({ naziv: studenti[i].grupa });
    }
    return grupe;
}

server.post('/batch/student', async (req, res) => {
    const primljeniCsv = req.body;
    try {
        let csvStudenti = [];
        const rows = primljeniCsv.split(/\r?\n/);
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
            csvStudenti.push({ime: columns[0], prezime: columns[1], index: columns[2], grupa: columns[3]});
        }
            const studentData = await baza.Student.findAll();
            const grupaData = await baza.Grupa.findAll();

            const postojeciStudenti = izdvojiStudente(studentData, csvStudenti, true);
            const noviStudenti = izdvojiStudente(studentData, csvStudenti, false);
            const noveGrupe = izdvojiGrupe(grupaData, csvStudenti);

            await baza.Grupa.bulkCreate(noveGrupe);
            await baza.Student.bulkCreate(noviStudenti);

            if( noviStudenti.length === csvStudenti.length )
                res.send({status: `Dodano ${noviStudenti.length} studenata!`});
            else
                res.send({status: `Dodano ${noviStudenti.length} studenata, a studenti ${postojeciStudenti} već postoje!`});
    } catch(greska) {
        console.log(greska);
        res.status(400).send({status: 'Nešto nije uredu sa bazom'});
    }
});

server.post('/vjezbe', async (req, res) => {
    const body = req.body;
    if( !validirajParametre(body, ['brojVjezbi']) )
        return res.status(400).send({status: 'Nije poslan broj vjezbi'});
    const {brojVjezbi} = body;
    try {
        await baza.Vjezba.drop();
        await baza.sync();
        const vjezbe = [];
        const studentData = await baza.Student.findAll();

        for (let i = 0; i < studentData.length; i++) {
            for (let j = 1; j <= brojVjezbi; j++) {
                vjezbe.push({
                    index: studentData[i].index,
                    greske: "",
                    tacnost: `0%`,
                    promjena: `0%`,
                    broj: j
                });
            }
        }
        await baza.Vjezba.bulkCreate(vjezbe);

        res.send({status: 'Vjezbe uspjesno kreirane'});
    } catch(greska) {
        res.status(400).send({status: 'Nešto nije uredu sa bazom'});
        console.log(greska);
    }
});

server.post('/student/:index/vjezba/:vjezba', async (req, res) => {
    const testReport = req.body;
    if( !validirajParametre(req.params, ['index', 'vjezba']) )
        return res.status(400).send({status: 'Nije poslan index ili vjezbe'});
    const {index, vjezba} = req.params;
    try {
        const vjezbaData = await baza.Vjezba.findAll({where: { index, broj: vjezba }});
        if(!vjezbaData.length)
            return res.status(400).send({status: 'Nije moguće ažurirati vježbe!'});
        const testReportStringify = JSON.stringify(testReport);
        const rez = JSON.parse(TestoviParser.dajTacnost(testReportStringify));
        vjezbaData[0].tacnost = rez.tacnost;
        vjezbaData[0].greske = rez.greske.map(greska => `'${greska}'`).toString();
        await vjezbaData[0].save();
        res.send({
            vjezba: vjezbaData[0].broj,
            tacnost: rez.tacnost,
            promjena: '0%',
            greske: vjezbaData[0].greske
        });
    } catch(greska) {
        res.status(400).send({status: 'Nešto nije uredu sa bazom'});
    }
});

const podigniServer = async () => {
    try{
        await baza.sync();
        console.log("Konekcija na bazu 'bwt21105'");
        server.listen(3000);
        console.log("Pokrenut 'localhost:3000' server na portu 3000");
    }catch (greska) {
        console.log("Greska sa serverom ili bazom");
    }
}

podigniServer();
module.exports = server;

