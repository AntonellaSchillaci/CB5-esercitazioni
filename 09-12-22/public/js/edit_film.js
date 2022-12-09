const GET = async (nome) => {
  const url = `http://localhost:3000/film?nome=${nome}`;
  const res = await fetch(url);
  return await res.json();
};

const PUT = async (body) => {
  const url = `http://localhost:3000/film`;
  return await fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams(body),
  });
};

const search_btn = document.getElementById("btnCerca");
const nomeEl = document.getElementById("nome");

const container = document.getElementById("container");

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  GET(nomeEl.value).then((film) => {
    container.textContent = "";
    createCard(film);
  });
});

const createCard = (film) => {
  const cardEl = document.createElement("div");
  const infoEl = document.createElement("h2");
  const nomeEl = document.createElement("input");
  const genereEl = document.createElement("input");
  const registaEl = document.createElement("input");
  const protagonistaEl = document.createElement("input");
  const durataEl = document.createElement("input");
  const candidatura_oscarEl = document.createElement("input");
  const lingua_originaleEl = document.createElement("input");
  const produzioneEl = document.createElement("input");
  const sequelEl = document.createElement("input");
  const saveEl = document.createElement("button");


  infoEl.textContent = "Informazioni";
  infoEl.classList = "sub_title_attori";
  cardEl.classList = "card";

  nomeEl.classList = "input-edit";
 nomeEl.setAttribute("placeholder", film.nome);

  genereEl.classList = "input-edit";
  genereEl.setAttribute("placeholder", film.genere);

  registaEl.classList = "input-edit";
  registaEl.setAttribute("placeholder", film.regista);

  protagonistaEl.classList = "input-edit";
  protagonistaEl.setAttribute("placeholder", film.protagonista);

  durataEl.classList = "input-edit";
  durataEl.setAttribute("placeholder", film.durata);

  candidatura_oscarEl.classList = "input-edit";
  candidatura_oscarEl.setAttribute("placeholder", film.candidatura_oscar);

  lingua_originaleEl.classList = "input-edit";
  lingua_originaleEl.setAttribute("placeholder", film.lingua_originale);

  produzioneEl.classList = "input-edit";
  produzioneEl.setAttribute("placeholder", film.produzione);

  sequelEl.classList = "input-edit";
  sequelEl.setAttribute("placeholder", film.sequel);

  saveEl.classList = "btnEdit";
  saveEl.textContent = "Modifica";

  saveEl.addEventListener("click", (e) => {
    e.preventDefault();
    let upFilm = {
      nome: nomeEl.value == "" ? film.nome : nomeEl.value,
      genere: genereEl.value == "" ? film.genere : genereEl.value,
      regista:registaEl.value == "" ? film.regista: registaEl.value,
      protagonista: protagonistaEl.value == "" ? film.protagonista : protagonistaEl.value,
      durata: durataEl.value == "" ? film.durata : durataEl.value,
      candidatura_oscar: candidatura_oscarEl.value == "" ? film.candidatura_oscar : candidatura_oscarEl.value,
      lingua_originale: lingua_originaleEl.value == "" ? film.lingua_originale : lingua_originaleEl.value,
      produzione: produzioneEl.value == "" ? film.produzione : produzioneEl.value,
      sequel: sequelEl.value == "" ? film.sequel : sequelEl.value
    };
    console.log(
      PUT(upFilm).then((res) => {
        console.log(res);
      })
    );
  });


  cardEl.append(infoEl, nomeEl, genereEl, registaEl, protagonistaEl, durataEl, candidatura_oscarEl, lingua_originaleEl, produzioneEl, sequelEl, saveEl);
  container.append(cardEl);
}