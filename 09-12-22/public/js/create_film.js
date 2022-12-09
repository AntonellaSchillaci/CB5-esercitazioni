const POST = async (url, nuovo_film) =>{
  let nuovo_film_array = [];
  for (let property in nuovo_film) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(nuovo_film[property]);
    nuovo_film_array.push(encodedKey + "=" + encodedValue);
  }
  nuovo_film_array = nuovo_film_array.join("&");
  
  
  const res = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: nuovo_film_array
  });
  return await res.json();
}


function createFilm(nuovo_film) {
  const url='http://localhost:3000/film'
  return POST(url, nuovo_film);
}





const create_btn_film = document.getElementById("create-btn-film");
const nameEl = document.getElementById("nome");
const anno_produzioneEl = document.getElementById("anno_produzione");
const genereEl = document.getElementById("genere");
const registaEl = document.getElementById("regista");
const protagonistaEl = document.getElementById("protagonista");
const durataEl = document.getElementById("durata");
const candidatura_oscarEl = document.getElementById("candidatura_oscar");
const lingua_originaleEl = document.getElementById("lingua_originale");
const produzioneEl = document.getElementById("produzione");
const sequelEl = document.getElementById("sequel");

const container = document.getElementById("container");

create_btn_film.addEventListener("click", (e) => {
  e.preventDefault();
  const film = {
    nome: nameEl.value,
    anno_produzione: anno_produzioneEl.value,
    genere: genereEl.value,
    regista: registaEl.value,
    protagonista: protagonistaEl.value,
    durata: durataEl.value,
    candidatura_oscar: candidatura_oscarEl.value,
    lingua_originale: lingua_originaleEl.value,
    produzione: produzioneEl.value,
    sequel: sequelEl.value
  };
  createFilm(film).then((message) => {
    alert(message);
  });
    alert("Film creato!")
  });
