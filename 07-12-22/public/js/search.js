const formElement = document.forms.formEl;
const btnCerca = formElement.btnCerca;
const btnCercaReg = formElement.btnCercaReg;
const attoreEl = document.querySelector("h3");
const registaEl = document.querySelector("h3");


const GET = async (url) => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => (attoreEl.textContent = `Hai selezionato:  ${data.nome} ${data.cognome}  ${data.data_nascita}`));
};

const GETreg = async (url) => {
  await fetch(url)
  .then((res) => res.json())
  .then((data) => (registaEl.textContent = `Hai selezionato:  ${data.nome} ${data.cognome}  ${data.data_nascita}`));
};




if(btnCerca) {
btnCerca.addEventListener("click", (e) => {
  e.preventDefault();
  const cognome_attore = formElement.cognome_attore.value;
  let url = `http://localhost:3000/attore?cognome=${cognome_attore}`;
  console.log(url);
  GET(url);
});
}

if(btnCercaReg) {
  btnCercaReg.addEventListener("click", (e) => {
    e.preventDefault();
    const cognome_regista = formElement.cognome_regista.value;
    let url = `http://localhost:3000/regista?cognome=${cognome_regista}`;
    console.log(url);
    GETreg(url);
  });
  }





