const _DELETE = async (url,nome) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'nome': nome})
    });
    return await res.json();
};

function deleteFilm(nome) {
    const url = `http://localhost:3000/film`;
    return _DELETE(url, nome);
  }


const delete_btn = document.getElementById("delete-btn");
const nomeEl = document.getElementById("nome");
const container = document.getElementById("container");

delete_btn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteFilm(nomeEl.value).then((film) => {
    container.textContent = "";
    
  });
  alert("Film cancellato!");
});