let firstNum = prompt ("Scegli il primo numero");
let firstNumParsed = parseInt(firstNum);
let secondNum = prompt ("Scegli il secondo numero");
let secondNumParsed = parseInt (secondNum);
let operation = prompt ("Hai scelto" + firstNum + "e" + secondNum + 
". Quale operazione vuoi svolgere? Scegli tra addizione, sottrazione, moltiplicazione, divisione");

let addizione = firstNumParsed + secondNumParsed;
let sottrazione = firstNumParsed - secondNumParsed;
let moltiplicazione = firstNumParsed * secondNumParsed;
let divisione = firstNumParsed / secondNumParsed;

if ( operation  === "addizione") {
    console.log ("Il risultato è\n" + addizione );
} 
else if ( operation === "sottrazione") {
    console.log ("Il risultato è\n" + sottrazione);
}
else if ( operation === "moltiplicazione") {
    console.log ("Il risultato è\n" + moltiplicazione);
}
else if ( operation === "divisione") {
    console.log ("Il risulato è\n" + divisione);
}
else { console.log ("Operazione fallita!");
}