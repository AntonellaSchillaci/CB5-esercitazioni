const DELETE = async (url,id) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return await res.json();
};

function deleteReg(id) {
    const url = `http://localhost:3000/regista`;
    return DELETE(url,id);
  }


const delete_btn_reg = document.getElementById("delete-btn-reg");
const idEl = document.getElementById("id");
const container = document.getElementById("container");

delete_btn_reg.addEventListener("click", (e) => {
  e.preventDefault();
  deleteReg(idEl.value).then((reg) => {
    container.textContent = "";
    
  });
  alert("Regista cancellato!");
});