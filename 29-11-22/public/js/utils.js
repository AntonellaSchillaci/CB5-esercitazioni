const formElement = document.forms.formEl;
const btnCerca = formElement.btnCerca;
const attoreEl = document.querySelector("h3");

const GET = async (url) => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => (attoreEl.textContent = "Hai selezionato: " + data.nome + "\n" + data.cognome));
};


if(btnCerca) {
    btnCerca.addEventListener("click", (e) => {
      e.preventDefault();
      const id_attore = formElement.id_attore.value;
      let url = `http://localhost:3000/attore?id=${id_attore}`;
      console.log(url);
      GET(url);
    });
}

