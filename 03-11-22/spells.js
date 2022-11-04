const spells = [
    {
        "id": 1,
        "title": "Accio",
        "description": "L'incantesimo di appello (summoning charm) viene utilizzato per richiamare oggetti apparentemente senza limiti di distanza. La formula è Accio, che in latino significa: io richiamo. Gli oggetti appellati non possono attraversare muri o porte, e possono quindi essere trattenuti anche a mani nude; è inoltre possibile incantare gli oggetti per impedire che vengano richiamati.",
        "category": "utili",
        "images": "./images/accio.png"
    },

    {
        "id": 2,
        "title": "Aguamenti",
        "description": "L'incantesimo Aguamenti è utilizzato per produrre un getto d'acqua dalla bacchetta.",
        "category": "utili",
        "images": "./images/aguamenti.png"
    },

    {
        "id": 3,
        "title": "Alohomora",
        "description": "L'incantesimo di apertura è una magia in grado di aprire le porte chiuse a chiave. La formula è Alohomora, che in un dialetto dell'Africa occidentale significa amico dei ladri.",
        "category": "utili",
        "images": "./images/alohomora.png"
    },

    {
        "id": 4,
        "title": "Ardemonio",
        "description": "L'Ardemonio (Fiendfyre) è un fuoco evocato magicamente in grado di distruggere anche gli Horcrux. È costituito da fiamme che, una volta evocate, aumentano continuamente di intensità e temperatura ed assumono la forma di belve feroci come chimere, serpenti e draghi.",
        "category": "attacco",
        "images": "./images/ardemonio.png"
    },

    {
        "id": 5,
        "title": "Avada Kedavra",
        "description": "L'Avada Kedavra, noto anche come Anatema che uccide, è un incantesimo che causa la morte istantanea di chi viene colpito.",
        "category": "maledizioni",
        "images": "./images/avadaKedavre.png"
    },

    {
        "id": 6,
        "title": "Confundus",
        "description": "L'incantesimo Confundus (Confundus charm) è una fattura che causa una grande confusione al bersaglio, facendogli dimenticare informazioni o sbagliare certi movimenti",
        "category": "attacco",
        "images": "./images/confundus.png"
    },

    {
        "id": 7,
        "title": "Crucio",
        "description": "La Maledizione Cruciatus è un incantesimo oscuro che causa dolore estremo a chi ne è bersaglio. La formula è Crucio, che in latino significa letteralmente io torturo.",
        "category": "maledizioni",
        "images": "./images/crucio.png"
    },

    {
        "id": 8,
        "title": "Expelliarmus",
        "description": "L'incantesimo di disarmo (disarming charm) serve a far volar via dalle mani di una persona un oggetto, solitamente un'arma.",
        "category": "attacco",
        "images": "./images/expelliarmus.png"
    },

    {
        "id": 9,
        "title": "Imperius",
        "description": "La Maledizione Imperius è un incantesimo che permette a chi lo utilizza di assumere il controllo totale sulle azioni di chi lo subisce. La formula è Imperio, derivata dal latino imperare, ossia comandare.",
        "category": "maledizioni",
        "images": "./images/imperius.webp"
    },

    {
        "id": 10,
        "title": "Legilimens",
        "description": "L'incantesimo di legilimanzia, la cui formula è Legilimens, è un incantesimo che serve a leggere nella mente delle persone, mostrando i ricordi e i pensieri del bersaglio all'utilizzatore.",
        "category": "attacco",
        "images": "./images/Legilimens.png"
    },

    {
        "id":11,
        "title": "Wingardium Leviosa",
        "description": "L'incantesimo di levitazione (levitating charm) è una magia che permette di far fluttuare gli oggetti. La formula è Wingardium Leviosa: wingardium è l'unione di wing, ossia ala in inglese, e di ardium, storpiatura di arduus, ossia alto o altura; leviosa, invece, deriva da levitate, ossia levitare.",
        "category": "utili",
        "images": "./images/leviosa.png"
    },

    {
        "id": 12,
        "title": "Lumos",
        "description": "L'incantesimo Lumos serve ad accendere la punta della bacchetta come se fosse una torcia.",
        "category": "utili",
        "images": "./images/lumos.jpg"
    },

    {
        "id": 13,
        "title": "Nox",
        "category": "utili",
        "description": "Per spegnere la bacchetta si usa la formula Nox.",
        "images": "./images/nox.jpg"
    },

    {
        "id": 14,
        "title": "Oblivion",
        "description": "L'incantesimo di memoria è un incantesimo per cancellare o modificare i ricordi. La formula è Oblivion, che deriva dal latino medievale obliviscor, che significa io dimentico.",
        "category": "attacco",
        "images": "./images/oblivion.png"
    },

    {
        "id": 15,
        "title": "Expecto Patronum",
        "description": "L'incanto Patronus è una magia molto complessa e difficile da eseguire, e costituisce l'unica difesa nota contro i dissennatori. La formula è Expecto Patronum, che deriva dall'unione delle parole latine expecto, ossia aspetto o attendo, e patronum, ossia patrono o protettore, e che significa letteralmente aspetto un protettore.",
        "category": "difesa",
        "images": "./images/patronus.webp"
    },

    {
        "id": 16,
        "title": "Pietrificus Totalus",
        "description": "La formula deriva dal greco petros, ossia pietra, e dal suffisso latino -ficus, che denota l'azione di fare qualcosa; il totalus è una storpiatura del latino medievale totalis, ossia totale: il significato sarebbe quindi pietrificare completamente.",
        "category": "attacco",
        "images": "./images/pietrificus.png"
    },

    {
        "id": 17,
        "title": "Protego",
        "description": "Il sortilegio Scudo (shielding charm) è un incantesimo che crea uno scudo magico in grado di bloccare e riflettere gli incantesimi che gli vengono rivolti contro. La formula è Protego.",
        "category": "difesa",
        "images": "./images/protego.jpeg"
    },

    {
        "id": 18,
        "title": "Reparo",
        "description": "L'incantesimo di riparazione serve, appunto, a riparare o ricostruire un oggetto.[42] La formula è Reparo, letteralmente io riparo, aggiusto.",
        "category": "utili",
        "images": "./images/reparo.png"
    },

    {
        "id": 19,
        "title": "Riddikulus",
        "description": "Il Riddikulus è un incantesimo utilizzato per contrastare i mollicci. La formula deriva da una storpiatura dell'inglese ridiculous (lett. ridicolo) o dalla parola latina ridiculum, avente lo stesso significato.",
        "category": "difesa",
        "images": "./images/riddikulus.jpg"
    },

    {
        "id": 20,
        "title": "Stupeficium",
        "description": "Lo Schiantesimo (Stunning spell) è una magia volta a stordire e a neutralizzare (schiantare) l'avversario. La formula è Stupeficium (Stupefy nell'originale, letteralmente stordire), derivata dal latino stupefacere.",
        "category": "attacco",
        "images": "./images/stupeficium.png"
    },

]

export default spells;