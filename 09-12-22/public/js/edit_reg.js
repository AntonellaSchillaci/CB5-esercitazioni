const GET = async (cognome) => {
    const url = `http://localhost:3000/regista?cognome=${cognome}`;
    const res = await fetch(url);
    return await res.json();
  };
  
  const PUT = async (body) => {
    const url = `http://localhost:3000/regista`;
    return await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams(body),
    });
  };
  
  const search_btn = document.getElementById("btnCerca");
  const cognomeEl = document.getElementById("cognome");
  
  const container = document.getElementById("container");
  
  search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    GET(cognomeEl.value).then((regista) => {
      container.textContent = "";
      createCard(regista);
    });
  });
  
  const createCard = (regista) => {
    const cardEl = document.createElement("div");
    const infoEl = document.createElement("h2");
    const nameEl = document.createElement("input");
    const surnameEl = document.createElement("input");
    const data_nascitaEl = document.createElement("input");
    const riconoscimentiEl = document.createElement("input");
    const inizio_attivitaEl = document.createElement("input");
    const fine_attivitaEl = document.createElement("input");
    const in_attivitaEl = document.createElement("input");
    const saveEl = document.createElement("button");
 
    infoEl.textContent = "Informazioni";
    infoEl.classList = "sub_title_attori";
    cardEl.classList = "card";
  
    nameEl.classList = "input-edit";
    nameEl.setAttribute("placeholder", regista.nome);
  
    surnameEl.classList = "input-edit";
    surnameEl.setAttribute("placeholder", regista.cognome);
  
    data_nascitaEl.classList = "input-edit";
    data_nascitaEl.setAttribute("placeholder", regista.data_nascita);
  
    riconoscimentiEl.classList = "input-edit";
    riconoscimentiEl.setAttribute("placeholder", regista.riconoscimenti);

    inizio_attivitaEl.classList = "input-edit";
    inizio_attivitaEl.setAttribute("placeholder", regista.inizio_attivita);

    fine_attivitaEl.classList = "input-edit";
    fine_attivitaEl.setAttribute("placeholder", regista.fine_attivita);

    in_attivitaEl.classList = "input-edit";
    in_attivitaEl.setAttribute("placeholder", regista.in_attivita);

    saveEl.classList = "btnEdit";
    saveEl.textContent = "Modifica";
  
    saveEl.addEventListener("click", (e) => {
      e.preventDefault();
      let upRegista = {
        nome: nameEl.value == "" ? regista.nome : nameEl.value,
        cognome: surnameEl.value == "" ? regista.cognome : surnameEl.value,
        data_nascita: data_nascitaEl.value == "" ? regista.data_nascita : data_nascitaEl.value,
        riconoscimenti: riconoscimentiEl.value == "" ? regista.riconoscimenti : riconoscimentiEl.value,
        inizio_attivita: inizio_attivitaEl.value == "" ? regista.inizio_attivita : inizio_attivitaEl.value,
        fine_attivita: fine_attivitaEl.value == "" ? regista.fine_attivita : fine_attivitaEl.value,
        in_attivita: in_attivitaEl.value == "" ? regista.in_attivita : in_attivitaEl.value
      };
      console.log(
        PUT(upRegista).then((res) => {
          console.log(res);
        })
      );
    });
  
  
    cardEl.append(infoEl, nameEl, surnameEl, data_nascitaEl, riconoscimentiEl, inizio_attivitaEl, fine_attivitaEl, in_attivitaEl, saveEl);
    container.append(cardEl);
  };