const cardEl = document.querySelector(".card");

const imgEl = document.createElement("img");
imgEl.className = "pokemon_img";

const nameEl = document.createElement("h1");
nameEl.className = "pokemon_name";

const idEl = document.createElement("p");
idEl.className = "pokemon_id";

const typeEl = document.createElement("p");
typeEl.className = "pokemon_type";

const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");

let index = 1;

buttonNext.addEventListener("click", () => {
    if (index >= 1) {
        buttonPrev.classList.remove();
    }
    index ++;
    pokemon(index);
});

buttonPrev.addEventListener("click", () => {
    if (index === 1) {
        return;
    }
    index --;
    pokemon(index);
})

function createId (id) {
    if (!id) return null;
    if (id < 10) {return `00${id}`}
    else if (id < 100) {return `0${id}`}
    return id;
}

const createCard = (data) => {

cardEl.className = (data.types[0].type.name);

imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);
nameEl.textContent = data.name;
idEl.textContent = `#${createId(data.id)}`;
typeEl.textContent = `Type: ${data.types[0].type.name}`;

cardEl.append(imgEl, nameEl, idEl, typeEl);
}
const caric = document.querySelector (".loading")

const pokemon = async (i) => {
    //caric.classList.toggle("active"); ---?
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let x = await response.json();
    createCard(x);
}

pokemon(index);
