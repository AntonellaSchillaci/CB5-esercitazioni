const DELETE = async (url,cognome) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'cognome':cognome})
    });
    return await res.json();
};

function deleteReg(id) {
    const url = `http://localhost:3000/regista`;
    return DELETE(url,id);
  }


const delete_btn_reg = document.getElementById("delete-btn-reg");
const cognomeEl = document.getElementById("cognome");
const container = document.getElementById("container");

delete_btn_reg.addEventListener("click", (e) => {
  e.preventDefault();
  deleteReg(cognomeEl.value).then((reg) => {
    container.textContent = "";
    
  });
  alert("Regista cancellato!");
});