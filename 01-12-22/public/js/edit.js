const GET = async (id) => {
    const url = `http://localhost:3000/attore?id=${id}`;
    const res = await fetch(url);
    return await res.json();
  };
  
  const PUT = async (body) => {
    const url = `http://localhost:3000/attore`;
    return await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams(body),
    });
  };
  
  const btnCerca = document.getElementById("btnCerca");
  const idEl = document.getElementById("id");
  
  const container = document.getElementById("container");
  

  btnCerca.addEventListener("click", (e) => {
    e.preventDefault();
    GET(idEl.value).then((actor) => {
      container.textContent = "";
      createCard(actor);
    });
  });
  
  const createCard = (actor) => {
    const cardEl = document.createElement("div");
    const idEl = document.createElement("h2");
    const nameEl = document.createElement("input");
    const surnameEl = document.createElement("input");
    const data_nascitaEl = document.createElement("input");
    const riconoscimentiEl = document.createElement("input");
    const inizio_attivitaEl = document.createElement("input");
    const fine_attivitaEl = document.createElement("input");
    const in_attivitaEl = document.createElement("input");
    const saveEl = document.createElement("button");
  
  
    cardEl.classList = "card";
  
    nameEl.classList = "input-edit";
    nameEl.setAttribute("placeholder", actor.nome);
  
    surnameEl.classList = "input-edit";
    surnameEl.setAttribute("placeholder", actor.cognome);
  
    data_nascitaEl.classList = "input-edit";
    data_nascitaEl.setAttribute("placeholder", actor.data_nascita);

    riconoscimentiEl.classList = "input-edit";
    riconoscimentiEl.setAttribute("placeholder", actor.riconoscimenti);

    inizio_attivitaEl.classList = "input-edit";
    inizio_attivitaEl.setAttribute("placeholder", actor.inizio_attivita);

    fine_attivitaEl.classList = "input-edit";
    fine_attivitaEl.setAttribute("placeholder", actor.fine_attivita);

    in_attivitaEl.classList = "input-edit";
    in_attivitaEl.setAttribute("placeholder", actor.in_attivita);
  
    saveEl.classList = "btnEdit";
    saveEl.textContent = "Modifica";

  
    let saveActor = {
      id: actor.id,
      nome: nameEl.value == '' ? actor.nome : nameEl.value,
      cognome: surnameEl.value == '' ? actor.cognome : surnameEl.value,
      data_nascita: data_nascitaEl.value == '' ? actor.data_nascita : data_nascitaEl.value,
      riconoscimenti: riconoscimentiEl.value == '' ? actor.riconoscimenti : riconoscimentiEl.value,
      inizio_attivita: inizio_attivitaEl.value == '' ? actor.inizio_attivita : inizio_attivitaEl.value,
      fine_attivita: fine_attivitaEl.value == '' ? actor.fine_attivita : fine_attivitaEl.value,
      in_attivita: in_attivitaEl.value == '' ? actor.in_attivita : in_attivitaEl.value,

    };
  
    saveEl.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(
        PUT(saveActor).then((res) => {
          console.log(res);
        })
      );
    });
  
    cardEl.append(nameEl, surnameEl, data_nascitaEl, riconoscimentiEl, inizio_attivitaEl, fine_attivitaEl, in_attivitaEl, saveEl);
    container.append(cardEl);
};