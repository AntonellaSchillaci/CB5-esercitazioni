const cardEl = document.getElementById("card");

const imgEl = document.createElement("img");
imgEl.className = "pokemon_img";

const nameEl = document.createElement("h1");
nameEl.className = "pokemon_name";

const idEl = document.createElement("p");
idEl.className = "pokemon_id";

const typeEl = document.createElement("p");
typeEl.className = "pokemon_type";

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let index = 1;

btnNext.addEventListener("click", () => {
    if (index >= 1) {
        btnPrev.classList.remove("inactive");
    }
    index ++;
    pokemon(index);
});

btnPrev.addEventListener("click", () => {
    if(index === 1) {
    return;
    }
    index --;
    pokemon(index);
})

function createId (id) {
    if ( !id ) return null;
    if ( id < 10 ) {return `00${id}`}
    else if ( id < 100 ) {return `0${id}`}
    return id;
}

const createCard = (el) => {

    cardEl.className = (el.types[0].type.name);
    
    imgEl.setAttribute("src" , el.sprites.other.dream_world.front_default);
    nameEl.textContent = el.name;
    idEl.textContent = `#${createId(el.id)}`;
    typeEl.textContent = `Type: ${el.types[0].type.name}`;

    cardEl.append(imgEl, nameEl, idEl, typeEl);
}


const pokemon = async (i) => {
    cardEl.classList.toggle("active");
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await response.json();
    cardEl.classList.toggle("active");
    createCard(data);
}

pokemon(index);
