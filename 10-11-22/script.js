const buttonEl = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const url = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} url
 */

buttonEl.addEventListener("click", () => {
  fetch(url, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
    
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});

const loadingEl = document.querySelector(".lds-hourglass");
const urlArray = [];

let request = urlArray.map((url) => {
  loadingEl.classList.add ("active");
  return fetch(url)
  .then((res) => res.json());
});

Promise.all(request)
.then((res) => res.map((r) => createCard(r)))
.finally(() => loadingEl.classList.remove ("active"));