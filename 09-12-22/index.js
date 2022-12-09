const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
mongoose.set('strictQuery', true);

// ---------------- connect to mongodb ------------------
mongoose.connect("mongodb://localhost:27017/videoteca",{useUnifiedTopology:true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

// ---------------- DB tabella attori --------------------
const schema_attore = new mongoose.Schema({
    "nome": String,
    "cognome": String,
    "data_nascita": String,
    "riconoscimenti": String,
    "inizio_attivita": String,
    "fine_attivita": String,
    "in_attivita": Boolean
});
const modelAttore = mongoose.model("attoris",schema_attore);
// -------------------------------------------------------

// ----------------- DB tabella registi -------------------
const schema_regista = new mongoose.Schema({
    "nome": String,
    "cognome": String,
    "data_nascita": String,
    "riconoscimenti": String,
    "inizio_attivita": String,
    "fine_attivita": String,
    "in_attivita": Boolean
});
const modelRegista = mongoose.model("registis", schema_regista);
// -----------------------------------------------------------

// -------------------- DB tabella film ----------------------
const schema_film = new mongoose.Schema ({
    "nome": String,
    "anno_produzione": String,
    "genere": {type: String, default: ''},
    "regista": String,
    "protagonista": String,
    "durata": {type: String, default: '0'},
    "candidatura_oscar": {type: String, default: '-1'},
    "lingua_originale":{type: String, default: ''},
    "produzione": {type: String, default: ''},
    "sequel": {type: Boolean, default: null},
});
const modelFilm = mongoose.model("films", schema_film);
// -----------------------------------------------------------

//--------------- CRUD ATTORI ---------------------
const insertAttore = async(obj)=>{
    const user = new modelAttore(obj);
    try {
        return await user.save();
    } catch (error) {
        return error;
    }
} 

const searchAttore = async(find_object)=> {
    try {
        const actor = await modelAttore.findOne(find_object);
        return actor;
    } catch (error) {
        return error;
    }
} 

const deleteAttore = async(cognome_attore)=> {
    try {
        const actor = await modelAttore.deleteOne({cognome: cognome_attore});
        return actor;
    } catch (error) {
        return error;
    }
} 

const updateAttore = async(find_object, update_object) => {
    try {
        const actor = await modelAttore.findOneAndUpdate(find_object, update_object);
        return actor;
    } catch (error) {
        return error;
    }
}

//--------------- CRUD REGISTI ---------------------
const insertRegista = async(obj)=>{
    const user = new modelRegista(obj);
    try {
        return await user.save();
    } catch (error) {
        return error;
    }
} 

const searchRegista = async(find_object)=> {
    try {
        const regista = await modelRegista.findOne(find_object);
        return regista;
    } catch (error) {
        return error;
    }
} 

const deleteRegista = async(cognome_regista)=> {
    try {
        const regista = await modelRegista.deleteOne({cognome: cognome_regista});
        return regista;
    } catch (error) {
        return error;
    }
} 

const updateRegista = async(find_object, update_object) => {
    try {
        const director = await modelRegista.findOneAndUpdate(find_object, update_object);
        return director;
    } catch (error) {
        return error;
    }
}

// -------------------------------------------------------------
//--------------- CRUD FILM ---------------------
const insertFilm = async(obj)=>{
    const user = new modelFilm(obj);
    try {
        return await user.save();
    } catch (error) {
        return error;
    }
} 

const searchFilm = async(find_object)=> {
    try {
        const film = await modelFilm.findOne(find_object);
        return film;
    } catch (error) {
        return error;
    }
} 

const deleteFilm = async(nome_film)=> {
    try {
        const film = await modelFilm.deleteOne({nome: nome_film});
        return film;
    } catch (error) {
        return error;
    }
} 

const updateFilm = async(find_object, update_object) => {
    try {
        const film= await modelFilm.findOneAndUpdate(find_object, update_object);
        return film;
    } catch (error) {
        return error;
    }
}
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.listen(3000,()=>{
    console.log("Salve, sono in esecuzione sulla porta 3000.");
});


//----------------------------------------------
//------------------- PAGINE ATTORI -------------------
//----------------------------------------------
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
//--------------- PAGINE REGISTI ---------------
//----------------------------------------------
app.get("/home_registi", function(req, res){
    res.sendFile("home_registi.html", {root: __dirname+"/src/resources"});
});

app.get("/cerca_regista", function(req, res){
    res.sendFile("cerca_regista.html", {root: __dirname+"/src/resources"});
});

app.get("/nuovo_regista", function(req, res){
    res.sendFile("nuovo_regista.html", {root: __dirname+"/src/resources"});
});

app.get("/cancella_regista", function(req, res){
    res.sendFile("cancella_regista.html", {root: __dirname+"/src/resources"});
});

app.get("/modifica_regista", function(req, res){
    res.sendFile("modifica_regista.html", {root: __dirname+"/src/resources"});
});

//----------------------------------------------
//--------------- PAGINE FILM ------------------
//----------------------------------------------
app.get("/home_films", function(req, res){
    res.sendFile("home_films.html", {root: __dirname+"/src/resources"});
});

app.get("/cerca_film", function(req, res){
    res.sendFile("cerca_film.html", {root: __dirname+"/src/resources"});
});

app.get("/nuovo_film", function(req, res){
    res.sendFile("nuovo_film.html", {root: __dirname+"/src/resources"});
});

app.get("/cancella_film", function(req, res){
    res.sendFile("cancella_film.html", {root: __dirname+"/src/resources"});
});

app.get("/modifica_film", function(req, res){
    res.sendFile("modifica_film.html", {root: __dirname+"/src/resources"});
});





//----------------------------------------------
//------------------- ATTORI -------------------
//----------------------------------------------

app.get("/attore", function(req, res) {
    const cognome_attore = req.query.cognome;
    if (cognome_attore == undefined) {
        res.status(400).send("Attore non trovato.");
    }

    const find_object = {cognome: cognome_attore};
    const attore = searchAttore(find_object);
    attore.then((actor)=> {
        res.send(actor);
    })
});

app.post("/attore", function(req, res){
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome attore mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome attore mancante");
    }

    const nuovo_attore = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const insert = insertAttore(nuovo_attore);
    insert.then((actor)=> {
        console.log(typeof actor);
        res.status(200).send("Attore creato");
    
    })
})

app.delete("/attore", function(req, res){
    if (req.body.cognome === undefined){
        res.status(400).send("Attore mancante!");
    }

    const attore_da_cancellare = req.body.cognome;
    const attore = deleteAttore(attore_da_cancellare);
    attore.then((actor)=> {
        console.log(actor);
        res.send(actor);
    })
    
});

app.put("/attore", function(req, res){
    if (req.body.cognome == undefined){
        res.status(400).send("Attore mancante!");
    }

    find_object = {cognome:req.body.cognome};
    



    const update_object = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const attore = updateAttore(find_object, update_object);
    attore.then((actor)=> {
        console.log(actor);
        res.send(actor);
    })
    
})


//----------------------------------------------
//------------------- REGISTI -------------------
//----------------------------------------------

app.get("/regista", function(req, res) {
    const cognome_regista = req.query.cognome;
    if (cognome_regista == undefined) {
        res.status(400).send("Regista non trovato.");
    }

    const find_object = {cognome: cognome_regista};
    const regista = searchRegista(find_object);
    regista.then((regista)=> {
        res.send(regista);
    })
});

app.post("/regista", function(req, res){
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome regista mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome regista mancante");
    }

    const nuovo_regista = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const insert = insertRegista(nuovo_regista);
    insert.then((regista)=> {
        console.log(typeof regista);
        res.status(200).send("Regista creato");
    
    })
})

app.delete("/regista", function(req, res){
    if (req.body.cognome === undefined){
        res.status(400).send("Regista mancante!");
    }

    const regista_da_cancellare = req.body.cognome;
    const regista = deleteRegista(regista_da_cancellare);
    regista.then((regista)=> {
        console.log(regista);
        res.send(regista);
    })
    
});

app.put("/regista", function(req, res){
    if (req.body.cognome == undefined){
        res.status(400).send("Regista mancante!");
    }

    find_object = {cognome:req.body.cognome};
    
    const update_object = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }

    const regista = updateRegista(find_object, update_object);
    regista.then((director)=> {
        console.log(director);
        res.send(director);
    })
    
})

//----------------------------------------------
//------------------- FILM ---------------------
//----------------------------------------------

//CRUD + elenco film

app.post("/film", function(req, res){
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome film mancante");
    }

    if(req.body.anno_produzione == undefined || req.body.anno_produzione.length==0) {
        res.status(400).send("Anno di produzione mancante");
    }

    const nuovo_film= {
        "nome": req.body.nome,
        "anno_produzione": req.body.anno_produzione,
        "genere": req.body.genere,
        "regista":req.body.regista,
        "protagonista": req.body.protagonista,
        "durata": req.body.durata,
        "candidatura_oscar": req.body.candidatura_oscar,
        "lingua_originale":req.body.lingua,
        "produzione": req.body.produzione,
        "sequel": req.body.sequel
    }

    const insert = insertFilm(nuovo_film);
    insert.then((film)=> {
        console.log(typeof film);
        res.status(200).send("Film creato");
    
    })
});

app.get("/film", function(req, res) {
    const titolo_film = req.query.nome;
    if (titolo_film == undefined) {
        res.status(400).send("Film non trovato.");
    }

    const find_object = {nome: titolo_film};
    const film = searchFilm(find_object);
    film.then((film)=> {
        res.send(film);
    })
});

app.delete("/film", function(req, res){
    if (req.body.nome === undefined){
        res.status(400).send("Film mancante!");
    }

    const film_da_cancellare = req.body.nome;
    const film = deleteFilm(film_da_cancellare);
    film.then((film)=> {
        console.log(film);
        res.send(film);
    })
    
});

app.put("/film", function(req, res){
    if (req.body.nome == undefined){
        res.status(400).send("Film mancante!");
    }

    find_object = {nome:req.body.nome};
    
    const update_object = {
        "nome": req.body.nome,
        "anno_produzione": req.body.anno_produzione,
        "genere": req.body.genere == undefined ? '' : req.body.genere,
        "regista":req.body.regista == undefined ? '': req.body.regista,
        "protagonista": req.body.protagonista == undefined ? '': req.body.protagonista,
        "durata": req.body.durata == undefined ? '': req.body.durata,
        "candidatura_oscar": req.body.candidatura_oscar == undefined ? '': req.body.candidatura_oscar,
        "lingua_originale":req.body.lingua_originale == undefined ? '': req.body.lingua_originale,
        "produzione": req.body.produzione == undefined ? '': req.body.produzione,
        "sequel": req.body.sequel == undefined ? '': req.body.sequel
    }

    const film = updateFilm(find_object, update_object);
    film.then((film)=> {
        console.log(film);
        res.send(film);
    })
    
})

