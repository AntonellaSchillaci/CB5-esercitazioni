"use strict"

function somma (a, b) {
    return (a + b);
}

function sottrai (a, b) {
    return (a - b);
}

function moltiplica (a, b){
    return (a * b);
}

function dividi(a, b){
   return (a / b);
}

const myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case 'somma':
    let _somma = somma (parseInt(myArgs[1]), parseInt(myArgs[2]));
    console.log(_somma)
break;

case 'sottrai':
    let _sottrai = sottrai( myArgs[1], myArgs[2]);
    console.log(_sottrai)
break;

case 'moltiplica':
    let _moltiplica = moltiplica( myArgs[1], myArgs[2]);
    console.log(_moltiplica)
break;

case 'dividi':
    let _dividi = dividi( myArgs[1], myArgs[2]);
    if (myArgs[2] == 0) {
        console.log('ERRORE! Non si può dividere per 0');
    } else {
    console.log(_dividi);
    }
break;

default:
    console.log('Errore!');
break
}

