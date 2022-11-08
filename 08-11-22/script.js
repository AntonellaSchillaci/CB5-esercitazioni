const bodyEl = document.querySelector("body");

const createCard = (data) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);

    const idEl = document.createElement("p");
    idEl.className = "pokemon-id";
    idEl.textContent = `#${data.id}`;

    const nameEl = document.createElement("h1");
    nameEl.textContent = data.name;

    const typeEl = document.createElement("p");
    typeEl.className = "pokemon-type";
    typeEl.textContent = `Type: ${data.types[0].type.name}`;

    switch(typeEl.textContent) {
        case `Type: grass`: 
            cardEl.style.background = '#DEFDE0';
            break;
        case `Type: electric`: 
            cardEl.style.background = '#FCF7DE';
            break;
        case `Type: water`: 
            cardEl.style.background = '#DEF3FD';
            break;
        case `Type: ground`: 
            cardEl.style.background = '#f4e7da';
            break;
        case `Type: rock`: 
            cardEl.style.background = '#d5d5d4';
            break;
        case `Type: fairy`: 
            cardEl.style.background = '#fceaff';
            break;
        case `Type: poison`: 
            cardEl.style.background = '#98d7a5';
            break;
        case `Type: bug`: 
            cardEl.style.background = '#f8d5a3';
            break;
        case `Type: dragon`: 
            cardEl.style.background = '#97b3e6';
            break;
        case `Type: dragon`: 
            cardEl.style.background = '#97b3e6';
            break;
        case `Type: psychic`: 
            cardEl.style.background = '#eaeda1';
            break;
        case `Type: flying`: 
            cardEl.style.background = '#F5F5F5';
            break;
        case `Type: fighting`: 
            cardEl.style.background = '#E6E0D4';
            break;
        case `Type: normal`: 
            cardEl.style.background = '#F5F5F5';
            break;
        case `Type: fire`: 
            cardEl.style.background = '#FDDFDF';
            break;
        case `Type: grass`: 
            cardEl.style.background = '#DEFDE0';
            break;
        case `Type: ghost`: 
            cardEl.style.background = '#705898';
            break;
        case `Type: ice`: 
            cardEl.style.background = '#98d8d8';
            break;     
    }

    cardEl.append(imgEl, idEl, nameEl, typeEl);
    bodyEl.append(cardEl);
}

fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
    .then((response) => response.json())
    .then((poke) => {
        poke.results.forEach((item) => fetch(item.url)
        .then((res) => res.json()
        .then((pokemon) => createCard(pokemon))))})
    .catch((error) => console.log(`ERRORE: ${error}`))




        