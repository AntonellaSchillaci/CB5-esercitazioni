const express = require("express");
const {readFileSync, writeFileSync} = require("fs");
//const { isNumberObject } = require("util/types");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000!");
});

app.get("/videoteca", function(req, res){
    res.sendFile("videoteca.html", {root: __dirname+"/src/resources"});
});

app.get("/home_attori", function(req, res){
    res.sendFile("home_attori.html", {root: __dirname+"/src/resources"});
});

app.get("/cerca_attore", function(req, res){
    res.sendFile("cerca_attore.html", {root: __dirname+"/src/resources"});
});

app.get("/nuovo_attore", function(req, res){
    res.sendFile("nuovo_attore.html", {root: __dirname+"/src/resources"});
});

app.get("/cancella_attore", function(req, res){
    res.sendFile("cancella_attore.html", {root: __dirname+"/src/resources"});
});

app.get("/modifica_attore", function(req, res){
    res.sendFile("modifica_attore.html", {root: __dirname+"/src/resources"});
});

app.get("/lista_attori", function(req, res){
    res.sendFile("lista_attori.html", {root: __dirname+"/src/resources"});
});
//----------------------------------------------
//------------------- ATTORI -------------------
//----------------------------------------------
app.get("/attori", function(req, res){
    //----------- lettura dati -----------
    const attori_text = readFileSync('./src/attori.json', 'utf8')
    const attori = JSON.parse(attori_text);

   //----------- filtro i campi ----------- 
    const arr_attori = attori.map((att) => {
        const {id, nome, cognome} = att
        return {id, nome, cognome}
    });

    // console.log(attori);
    res.json(arr_attori);
})

app.post("/attore", function(req, res) {
    // console.log("Parametri: " + JSON.stringify(req.params, null, 4));
    // console.log("Body: " + JSON.stringify(req.body, null, 4));
    //const nuovo_attore = req.body;

    if (req.body.nome === undefined) {
        res.status(400).send("Parametro nome mancante");
    }

    if (req.body.cognome === undefined) {
        res.status(400).send("Parametro cognome mancante");
    }
    
    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

    //console.log("Il mio parametro id: " + req.body.id);

//----------- lettura dati da file -----------
    const attori_text = readFileSync('./src/attori.json', 'utf8')
    const attori = JSON.parse(attori_text);
//---------------------------------------------------------
    const index = Number(nuovo_attore.id)-1;
    console.log("Nuovo indice: " + index);
    attori[index] = nuovo_attore;
    console.log(attori);
    writeFileSync('./src/attori.json',JSON.stringify(attori));
    res.status(200).send("Attore creato");
});

app.put("/attore", function(req, res) {
    if (req.body.nome === undefined) {
        res.status(400).send("Parametro nome mancante");
    }

    if (req.body.cognome === undefined) {
        res.status(400).send("Parametro cognome mancante");
    }
    
    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

    //----------- lettura dati da file -----------
    const attori_text = readFileSync('./src/attori.json', 'utf8')
    const attori = JSON.parse(attori_text);
    //---------------------------------------------------------

    //trovare e cancellare l'elemento
    const index = attori.findIndex(attore => attore.id === nuovo_attore.id);
    console.log("indice: " + index);

    if(index>0) {
        attori.splice(index, 1, nuovo_attore);

        writeFileSync('./src/attori.json',JSON.stringify(attori));
        res.status(200).send("Attore aggiornato");
    } else {
        res.status(200).send("Attore non trovato");
    }
  

    
});

app.get("/attore", function(req, res){
    // -------------lettura parametro ---------------------
    const id_attore = parseInt(req.query.id);
    if (isNaN(id_attore)){
        res.status(400).send("Parametro mancante!");
    }
    // console.log("ID attore: "+id_attore);
    // ---------------------------------------------

    // -------------lettura dati da file ---------------------
    const attori_text = readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------

    // ------------- filtro i dati -----------------------------
    const attr = attori.find((attore)=>{
        return attore.id == id_attore;
    });
    // ---------------------------------------------
    // console.log("Attore: "+attr);
    if (typeof attr === 'undefined'){
        //console.log("Attore undefined ");
        res.status(400).send("Attore non trovato!");
    } else {  
        res.json(attr);
    }
});

app.delete("/attore", function(req, res) {
    //ricevo l'id
    if (req.body.id === undefined) {
        res.status(400).send("Parametro id mancante");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!")
    }

    const id_da_cancellare = req.body.id;

    //leggo il file del json
    const attori_text = readFileSync('./src/attori.json', 'utf8')
    const attori = JSON.parse(attori_text);

    //verifico che l'elemento esiste
    const attr = attori.filter((attore) => {
        return attore.id == id_da_cancellare;
    });

    //se l'elemento esiste cancello il dato
   if (attr.length > 0) {
    const array_deleted = attori.filter((attore) => {
        return attore.id != id_da_cancellare;
        });
        writeFileSync('./src/attori.json', JSON.stringify(array_deleted));
        //console.log(array_deleted);
    
        res.status(200).send("Attore cancellato");
    } else {
        res.status(200).send("Attore da cancellare non trovato");
    }
    });
//----------------------------------------------


//----------------------------------------------
//------------------- REGISTI ------------------
//----------------------------------------------
app.get("/registi", function(req, res){
    //----------- lettura dati -----------
    const registi_text = readFileSync('./src/registi.json', 'utf8')
    const registi = JSON.parse(registi_text);

   //----------- filtro i campi ----------- 
    const arr_registi = registi.map((reg) => {
        const {id, nome, cognome} = reg
        return {id, nome, cognome}
    });

    res.json(arr_registi);
})

app.post("/regista", function(req, res) {
  
    if (req.body.nome === undefined) {
        res.status(400).send("Parametro nome mancante");
    }

    if (req.body.cognome === undefined) {
        res.status(400).send("Parametro cognome mancante");
    }
    
    const nuovo_regista = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

//----------- lettura dati da file -----------
    const registi_text = readFileSync('./src/registi.json', 'utf8')
    const registi = JSON.parse(registi_text);
//---------------------------------------------------------
    const index = Number(nuovo_regista.id)-1;
    //console.log("Nuovo indice: " + index);
    registi[index] = nuovo_regista;
    writeFileSync('./src/registi.json',JSON.stringify(registi));
    res.status(200).send("Regista creato");
});

app.put("/regista", function(req, res) {
    if (req.body.nome === undefined) {
        res.status(400).send("Parametro nome mancante");
    }

    if (req.body.cognome === undefined) {
        res.status(400).send("Parametro cognome mancante");
    }
    
    const nuovo_regista = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita,
    };

    //----------- lettura dati da file -----------
    const registi_text = readFileSync('./src/registi.json', 'utf8')
    const registi = JSON.parse(registi_text);
    //---------------------------------------------------------

    //trovare e cancellare l'elemento
    const index = registi.findIndex(regista => regista.id === nuovo_regista.id);
    //console.log("indice: " + index);

    if(index>0) {
        registi.splice(index, 1, nuovo_regista);

        writeFileSync('./src/registi.json',JSON.stringify(registi));
        res.status(200).send("Regista aggiornato");
    } else {
        res.status(200).send("Regista non trovato!");
    }
   
});

app.get("/regista", function(req, res){
    // -------------lettura parametro ---------------------
    const id_regista = parseInt(req.query.id);
    if (isNaN(id_regista)){
        res.status(400).send("Parametro mancante!");
    }
    // ---------------------------------------------

    // -------------lettura dati da file ---------------------
    const registi_text = readFileSync('./src/registi.json', 'utf8');
    const registi = JSON.parse(registi_text);
    // ---------------------------------------------

    // ------------- filtro i dati -----------------------------
    const reg = registi.find((regista)=>{
        return regista.id == id_regista;
    });
    // ---------------------------------------------
    // console.log("Attore: "+attr);
    if (typeof reg === 'undefined'){
        res.status(400).send("Regista non trovato!");
    } else {  
        res.json(reg);
    }
});

app.delete("/regista", function(req, res) {
    //ricevo l'id
    if (req.body.id === undefined) {
        res.status(400).send("Parametro id mancante");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!")
    }

    const id_da_cancellare = req.body.id;

    //leggo il file del json
    const registi_text = readFileSync('./src/registi.json', 'utf8')
    const registi = JSON.parse(registi_text);

    //verifico che l'elemento esiste
    const reg = registi.filter((regista) => {
        return regista.id == id_da_cancellare;
    });

    //se l'elemento esiste cancello il dato
   if (reg.length > 0) {
    const array_deleted = registi.filter((regista) => {
        return regista.id != id_da_cancellare;
        });
        writeFileSync('./src/registi.json', JSON.stringify(array_deleted));
    
        res.status(200).send("Regista cancellato");
    } else {
        res.status(200).send("Regista da cancellare non trovato");
    }
    });