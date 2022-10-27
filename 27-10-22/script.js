// ---------- ESERCIZIO 1 ----------
function calculator(x, y, operation = "") {
    switch (operation) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
    }
  }
  console.log(calculator(12, 4, "*"));

  // ----------- ESERCIZIO 2 ---------
  const character = {
    nome: "Harry",
    cognome: "Potter",
    dataDiNascita: "31 luglio 1980", 
    soprannome: "Il bambino che è sopravvissuto",
    capelli: "neri",
    occhi: "verdi",
    segniParticolari:"cicatrice a forma di saetta sulla fronte",
    friends: {
        first: "Ron Weasley",
        second: "Hermione Granger",
    },
  };
   console.log(character.nome);
   console.log(character.cognome); 
   console.log(character.dataDiNascita);
   console.log(character.soprannome);
   console.log(character.capelli);
   console.log(character.occhi);
   console.log(character.segniParticolari);
   console.log(character.friends);

   console.log(Object.keys(character));
   console.log(Object.values(character));
  
 // ---------- AVANZATO ----------???
//  function calculator(x, y, z, j, operation = "") {
//     switch (operation) {
//       case "+":
//         return x + y + z + j;
//       case "-":
//         return x - y - z - j;
//       case "*":
//         return x * y * z * j;
//       case "/":
//         return x / y / z / j;
//     }
//   }
//   console.log(calculator(2, 4, 2, 6, "/"));

  