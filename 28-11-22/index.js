const express = require("express");

const mod_calc = require("./src/modulo_calcolatrice");

const app = express();

app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000!");
});

app.get("/calcolatrice", function(req, res){
    res.sendFile("calcolatrice.html", {root: __dirname+"/src/resources"});
});

app.get("/somma", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.somma(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/sottrazione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.sottrazione(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/moltiplicazione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.moltiplicazione(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});

app.get("/divisione", function(req, res){
    let p1 = req.query.param1;
    let p2 = req.query.param2;
    console.log("param1: "+ p1+ " param2: "+ p2);
    const result = mod_calc.divisione(p1, p2);
    console.log("risultato: "+result);
    res.status(200).send(result+"");
});
