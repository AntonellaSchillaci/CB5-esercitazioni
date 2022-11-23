import {somma, sottrazione, divisione, moltiplicazione} from "./calcolatrice.js";
import http from "http";
import url from "url";
import fs from "fs";


const server = http.createServer((req, res) =>{
    const my_url = url.parse(req.url, true).pathname;
    const params = url.parse(req.url, true).query;
    const {param1, param2} = params;
    console.log(param1, param2);

switch(my_url) {
    case "/home":
        res.write("home");
        break;

    case "/calcolatrice":
        const data = fs.readFileSync("./calcolatrice.html");
        res.write(data.toString());
        break;
    
    case "/somma":
            const dataAdd = fs.readFileSync("./somma.html");
            res.write(dataAdd.toString());
            res.write(`${somma(param1, param2)}`);
            break;
    
    case "/sottrazione":
            const dataSott = fs.readFileSync("./sottrazione.html");
            res.write(dataSott.toString());
            res.write(`${sottrazione(param1, param2)}`);
            break;

    case "/moltiplicazione":
            const dataMolt = fs.readFileSync("./moltiplicazione.html");
            res.write(dataMolt.toString());
            res.write(`${moltiplicazione(param1, param2)}`);
            break;

    case "/divisione":
            const dataDiv = fs.readFileSync("./divisione.html");
            res.write(dataDiv.toString());
            res.write(`${divisione(param1, param2)}`);
            break;

    case "/style.css":
        const style = fs.readFileSync("./style.css");
        res.write(style.toString());
        break;
    
    default: res.write("<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>");
}

res.end();
});

// console.log(somma(1,2));

server.listen(3000);