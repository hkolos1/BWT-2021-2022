var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    if(request.method=='GET'){
        fs.readFile('imenik.txt', function (error, contents){
            if(error)
                throw error;
            let nizElemenata = contents.toString().split("\r");
            for (let i = 0; i < nizElemenata.length-1; i++) {
                let element = nizElemenata[i].split(",");
                let jsonImenik = { ime: element[0], prezime: element[1], adresa: element[2], broj_telefona: element[3] };
                response.write(JSON.stringify(jsonImenik));
            }
            response.end();
        });
    }
}).listen(8080, () => {
    console.log("Server se izvrsava na localhost:8080");
});
