const cors = require("cors");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

/* Zadatak #1 */
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "vjezba"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.static("scripts"));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`${PORT}...`)
});


function generateTable(data) {
  var table = `<table>
        <tr>
            <th>Ime I Prezime</th>
            <th>Adresa</th>
            <th>Broj Telefona</th>
        </tr>`;
  data.forEach((x) => {
    table += `<tr>`;

    Object.values(x).forEach((y) => {
      table += `<td>${y}</td>`;
    });

    table += `</tr>`;
  });

  table += "</table>";

  return table;
}

/* Zadatak #2 */
app.get("/imenik", (request, resources) => {
  con.query("SELECT * FROM imenik", (error, results) => {
    if (error) {
      resources.json("Greška!");
    } else {
      resources.setHeader("Content-Type", "text/html");
      resources.send(generateTable(results));
    }
  });
});

/* Zadatak #3 */
app.post("/imenik", (request, resources) => {
  con.query(
    `INSERT INTO imenik(imePrezime, adresa, brojTelefona) VALUES (?,?,?);`,
    Object.values(request.body),
    (error, results) => {
      if (error) {
        console.log(error);
        resources.json("Greška!");
      } else {
        resources.json("Uspješno!");
      }
    }
  );
});



/* Zadatak #5 */
app.get("/poznanik/:kontakt", (request, resources) => {
  con.query(
    `SELECT imenik.imePrezime,imenik.adresa, imenik.brojTelefona FROM imenik, adresar 
    WHERE adresar.idPoznanik = imenik.id AND adresar.idKontakt = ${request.params.kontakt}`,
    [],
    (error, results) => {
      if (error) {
        console.log(error);
        resources.json("Greska!");
      } else {
        resources.setHeader("Content-Type", "text/html");
        resources.json(generateTable(results));
      }
    }
  );
});
