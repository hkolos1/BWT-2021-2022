const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const sequelize = require("./baza.js");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const Imenik = require(path.join(__dirname, "./imenik.js"));
const Adresar = require(path.join(__dirname, "./adresar.js"));

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

Imenik.sync({ force: false });
Adresar.sync({ force: false });

app.get("/imenik", (request, resource) => {
    Imenik.findAll({ raw: true })
        .then((response) => {
            var tabela = `
            <table>
              <thead>
                <tr>
                  <td>Ime</td>
                  <td>Prezime</td>
                  <td>Adresa</td>
                  <td>Broj Telefona</td>
                  <td>Datum Dodavanja</td>
                </tr>
              </thead>
            <tbody>`;

            response.forEach((kontakt) => {
                tabela += "<tr>";

                tabela += "<td>" + kontakt.ime + "</td>";
                tabela += "<td>" + kontakt.prezime + "</td>";
                tabela += "<td>" + kontakt.adresa + "</td>";
                tabela += "<td>" + kontakt.brojTelefona + "</td>";
                tabela += "<td>" + kontakt.datumDodavanja + "</td>";

                tabela += "</tr>";
            });

            tabela += "</tbody></table>";

            resource.setHeader("Response-Type", "text/html");
            resource.send(` <style> table, th, td {border: 1px solid black;} </style> `+tabela);
        })
        .catch((Greska) => {
            console.log(Greska);
            resource.send(Greska);
        });
});

app.post("/forma", (request, resource) => {
    Imenik.create({
        ime: request.body.ime,
        prezime: request.body.prezime,
        adresa: request.body.adresa,
        brojTelefona: request.body.brojTelefona,
        datumDodavanja: new Date(),
    })
        .then(() => {
            resource.status(200);
            resource.json("Dodano u tabelu!");
        })
        .catch((error) => {
            resource.status(400);
            resource.json(error.errors[0].message);
            console.log(error);
        });
});

app.get("/poznanik/:kontakt", (request, resource) => {
    Adresar.findAll({
        attributes: [],
        where: { idKontakt: request.params.kontakt },
        include: [
            {
                model: Imenik,
                attributes: ["ime", "prezime", "adresa", "brojTelefona"],

                raw: true,
            },
        ],
        raw: true,
    })
        .then((response) => {
            response = JSON.parse(JSON.stringify(response));
            var tabela = `
      <table>
        <thead>
          <tr>
            <td>Ime</td>
            <td>Prezime</td>
            <td>Adresa</td>
            <td>Broj Telefona</td>
          </tr>
        </thead>
      <tbody>`;

            response.forEach((kontakt) => {
                let values = Object.values(kontakt);

                tabela += "<tr>";

                tabela += "<td>" + values[0] + "</td>";
                tabela += "<td>" + values[1] + "</td>";
                tabela += "<td>" + values[2] + "</td>";
                tabela += "<td>" + values[3] + "</td>";

                tabela += "</tr>";
            });

            tabela += "</tbody></table>";

            resource.setHeader("Response-Type", "text/html");
            resource.send(tabela);
        })
        .catch((error) => {
            resource.sendStatus(400);
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`${PORT}...`)
});
