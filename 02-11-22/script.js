const heroImg = document.createElement("img"); 
  
heroImg.src = ""; 
const src = document.getElementById("hero"); 
  
src.appendChild(heroImg); 

const textEl = document.createElement("h1");
textEl.textContent = "Shop Online";
src.appendChild(textEl);

const createCard = (title, imgUrl, description, category, parent,) => {
    const cardEl = document.createElement("div");
  
    cardEl.className = "card";
   
  
    // title
    const titleEl = document.createElement("h1");
    titleEl.textContent = title;
  
    // img
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", category);
  
    // paragraph
    const parEl = document.createElement("p");
    parEl.textContent = description;
  
    cardEl.append(titleEl, imgEl, parEl);
    parent.appendChild(cardEl);
  };
  
  import products from "./products.js";
  
  
  const smartphoneEl = document.querySelector(".smartphone");
  const laptopEl = document.querySelector(".laptop");
  const fragranceEl = document.querySelector(".fragrance");
  const skincareEl = document.querySelector(".skincare");
  const groceriesEl = document.querySelector(".groceries");
  const homeEl = document.querySelector(".home");
  
  const headerSmart = document.createElement("h1");
  const headerLap = document.createElement("h1");
  const headerFrag = document.createElement("h1");
  const headerSkin = document.createElement("h1");
  const headerGro = document.createElement("h1");
  const headerHome = document.createElement("h1");
  
 
  headerSmart.textContent = "Smartphones";
  headerLap.textContent = "Laptop";
  headerFrag.textContent = "Fragrances";
  headerSkin.textContent = "Skincare";
  headerGro.textContent = "Groceries";
  headerHome.textContent = "Home-decoration";

  smartphoneEl.appendChild(headerSmart);
  laptopEl.appendChild(headerLap);
  fragranceEl.appendChild(headerFrag);
  skincareEl.appendChild(headerSkin);
  groceriesEl.appendChild(headerGro);
  homeEl.appendChild(headerHome);

  products
    .filter((product) => product.category === "smartphones")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.brand,
        smartphoneEl
      );
    });
  
  products
    .filter((product) => product.category === "laptops")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.category,
        laptopEl
      );
    });

    products
    .filter((product) => product.category === "fragrances")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.brand,
        fragranceEl
      );
    });

    products
    .filter((product) => product.category === "skincare")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.brand,
        skincareEl
      );
    });

    products
    .filter((product) => product.category === "groceries")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.brand,
        groceriesEl
      );
    });

    products
    .filter((product) => product.category === "home-decoration")
    .map((product) => {
      createCard(
        product.title,
        product.images[0],
        product.description,
        product.brand,
        homeEl
      );
    });