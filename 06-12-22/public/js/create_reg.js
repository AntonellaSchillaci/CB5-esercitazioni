const POST = async (url, nuovo_regista) =>{
  let nuovo_regista_array = [];
  for (let property in nuovo_regista) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(nuovo_regista[property]);
    nuovo_regista_array.push(encodedKey + "=" + encodedValue);
  }
  nuovo_regista_array = nuovo_regista_array.join("&");
  
  
  const res = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: nuovo_regista_array
  });
  return await res.json();
}


function createRegista(nuovo_regista) {
  const url='http://localhost:3000/regista'
  return POST(url, nuovo_regista);
}





const create_btn_reg = document.getElementById("create-btn-reg");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const data_nascitaEl = document.getElementById("data_nascita");
const riconoscimentiEl = document.getElementById("riconoscimenti");
const inizio_attivitaEl = document.getElementById("inizio_attivita");
const fine_attivitaEl = document.getElementById("fine_attivita");
const in_attivitaEl = document.getElementById("in_attivita");

const container = document.getElementById("container");

create_btn_reg.addEventListener("click", (e) => {
  e.preventDefault();
  const regista = {
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: data_nascitaEl.value,
    riconoscimenti: riconoscimentiEl.value,
    inizio_attivita: inizio_attivitaEl.value,
    fine_attivita: fine_attivitaEl.value,
    in_attivita: in_attivitaEl.value,
  };
  createRegista(regista).then((message) => {
    alert(message);
  });
    alert("Regista creato!")
  });
