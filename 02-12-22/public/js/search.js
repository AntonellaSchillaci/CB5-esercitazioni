const formElement = document.forms.formEl;
const btnCerca = formElement.btnCerca;
const btnCercaReg = formElement.btnCercaReg;
const attoreEl = document.querySelector("h3");
const registaEl = document.querySelector("h3");


const GET = async (url) => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => (attoreEl.textContent = "Hai selezionato: " + data.nome + "\n" + data.cognome + "\n"+"\n" + data.data_nascita));
};

const GETreg = async (url) => {
  await fetch(url)
  .then((res) => res.json())
  .then((data) => (registaEl.textContent = "Hai selezionato: " + data.nome + "\n" + data.cognome + "\n"+"\n" + data.data_nascita));
};




if(btnCerca) {
btnCerca.addEventListener("click", (e) => {
  e.preventDefault();
  const id_attore = formElement.id_attore.value;
  let url = `http://localhost:3000/attore?id=${id_attore}`;
  console.log(url);
  GET(url);
});
}

if(btnCercaReg) {
  btnCercaReg.addEventListener("click", (e) => {
    e.preventDefault();
    const id_regista = formElement.id_regista.value;
    let url = `http://localhost:3000/regista?id=${id_regista}`;
    console.log(url);
    GETreg(url);
  });
  }





