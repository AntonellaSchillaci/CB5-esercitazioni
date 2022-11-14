const cardEl = document.querySelector(".card");

const titleEl = document.createElement("h1");
titleEl.className = "post_title";

const idEl = document.createElement("h3");
idEl.className = "post_id";

const bodyEl = document.createElement("p");
bodyEl.className = "post_body";

const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");

const loaderContainer = document.querySelector('.loader-container');

let index = 1;

buttonNext.addEventListener("click", () => {
    if (index >= 1) {
        buttonPrev.classList.remove();
    }
    index ++;
    posts(index);
});

buttonPrev.addEventListener("click", () => {
    if (index === 1) {
        return;
    }
    index --;
    posts(index);
})

function createId (id) {
    if (!id) return null;
    if (id < 10) {return `00${id}`}
    else if (id < 100) {return `0${id}`}
    return id;
}

const createCard = (data) => {

titleEl.textContent = data.title;
idEl.textContent = `#${createId(data.id)}`;
bodyEl.textContent = data.body;

cardEl.append(titleEl, idEl, bodyEl);
}
const caric = document.querySelector (".loading")

const posts = async (i) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts//${i}`);
    let x = await response.json();
    createCard(x);
}

window.addEventListener('load', () => {
    loaderContainer.classList.add('loader-container-hidden');
});

posts(index);
