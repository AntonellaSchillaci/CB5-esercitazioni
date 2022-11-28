// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnSum = formElement.btnSum;
const btnSub = formElement.btnSub;
const btnMolt = formElement.btnMolt;
const btnDiv = formElement.btnDiv;
const risEl = document.querySelector("h3");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};
  
if(btnSum) {
btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
}
if (btnSub) {
btnSub.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
} 
if(btnMolt) {
btnMolt.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
}
if(btnDiv) {
btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});
}
