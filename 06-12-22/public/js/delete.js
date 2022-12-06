const _DELETE = async (url,cognome) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'cognome': cognome})
    });
    return await res.json();
};

function deleteActor(cognome) {
    const url = `http://localhost:3000/attore`;
    return _DELETE(url, cognome);
  }


const delete_btn = document.getElementById("delete-btn");
const cognomeEl = document.getElementById("cognome");
const container = document.getElementById("container");

delete_btn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteActor(cognomeEl.value).then((actor) => {
    container.textContent = "";
    
  });
  alert("Attore cancellato!");
});