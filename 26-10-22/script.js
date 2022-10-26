let identità = ["Antonella", "Schillaci", "28 anni", "Laurea Triennale"];

for (let i = 0; i <= identità.length - 1; i++) {
  
       switch (identità[i]) {
        case "Antonella":
           console.log("1.Nome: ", identità[i]);
          break;
        case "Schillaci":
          console.log("2.Cognome: ", identità[i]);
          break;
        case "28 anni":
          console.log("3.Età: ", identità[i]);
          break;
        case "Laurea Triennale":
          console.log("4.Titolo di studio: ", identità[i]);
          break;
        default:
          console.log("Non c'è nessuna identità!");
      }
    }
    let nome = ("Antonella".toUpperCase());
    let cognome = ("Schillaci".toUpperCase());
    identità.splice(0, 2, nome, cognome);
    identità.splice(2, 1, "14 Maggio 1994");
    console.log ("Dopo la sostituzione: " + identità);

//------- AVANZATO -------
    let x = 7;
    let str= "";

    for (let i = 0; i < x; i++ ) {
        for (let j = 0; j < x - i; j++) {
            str += "#";
        }
        str += "\n";
    }
    console.log (str);
