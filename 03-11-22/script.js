
import spells from "./spells.js"

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  const button = document.querySelector("button");
  
  button.addEventListener("click", () => {
    myFunction();
  });

const createCard = (title, img, description, category, parent) => {

 const cardEl = document.createElement("div");
 cardEl.className = "card";

 const titleEl = document.createElement("h2");
 titleEl.textContent = title;

 const imgEl = document.createElement("img");
 imgEl.setAttribute("src", img);
 imgEl.setAttribute("alt", category);

 const parEl = document.createElement("p");
 parEl.textContent = description;
 

 cardEl.append(titleEl, imgEl, parEl);
 parent.appendChild(cardEl);
 
};


const utiliEl = document.querySelector(".utili");
const attaccoEl = document.querySelector(".attacco");
const difesaEl = document.querySelector(".difesa");
const maledizioniEl = document.querySelector(".maledizioni");

const headerUtili = document.createElement("h1");
const headerAttacco = document.createElement("h1");
const headerDifesa = document.createElement("h1");
const headerMaledizioni = document.createElement("h1");

headerUtili.textContent = "Incantesimi Utili";
headerAttacco.textContent = "Incantesimi di Attacco";
headerDifesa.textContent = "Incantesimi di Difesa";
headerMaledizioni.textContent = "Maledizioni senza perdono";

utiliEl.appendChild(headerUtili);
attaccoEl.appendChild(headerAttacco);
difesaEl.appendChild(headerDifesa);
maledizioniEl.appendChild(headerMaledizioni);

spells
.filter((spell) => spell.category === "utili")
.map((spell) => {
  createCard(
    spell.title,
    spell.images,
    spell.description,
    spell.category,
    utiliEl
  );
});


spells
.filter((spell) => spell.category === "attacco")
.map((spell) => {
  createCard(
    spell.title,
    spell.images,
    spell.description,
    spell.category,
    attaccoEl
  );
});

spells
.filter((spell) => spell.category === "difesa")
.map((spell) => {
  createCard(
    spell.title,
    spell.images,
    spell.description,
    spell.category,
    difesaEl
  );
});


spells
.filter((spell) => spell.category === "maledizioni")
.map((spell) => {
  createCard(
    spell.title,
    spell.images,
    spell.description,
    spell.category,
    maledizioniEl
  );
});
