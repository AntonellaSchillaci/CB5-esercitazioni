import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);


// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}


const createCard = (url, parent, img, name, type, id) => {
	const wrapperEl = c('li');
	const cardEl = c("div");
	const imgEl = c("img");
	const idEl = c('p');
	const nameEl = c('p');
	const typeEl = c('p');
	const btnDelete = c('button');
	const btnEdit = c('button');

	wrapperEl.className = "pokemonList"
	btnDelete.className = "btn"
	btnEdit.className = "btn"
	// idEl.className = "id-style"

	imgEl.setAttribute("src", "https://picsum.photos/200");
	// idEl.textContent = id
	nameEl.textContent = name
	typeEl.textContent = type
	btnDelete.textContent = "Delete"
	btnEdit.textContent = "Edit"


	btnDelete.addEventListener("click", () => {
		DELETE(url, id)
			.then(() => location.reload())
	})

	btnEdit.addEventListener("click", () => {
		const patchForm = document.forms.pokemonPatch
		const elements = patchForm.elements;

		elements.id.value = id;
		elements.name.value = nameEl.textContent
		elements.type.value = typeEl.textContent
	})

	cardEl.append(imgEl, nameEl, typeEl, btnDelete, btnEdit);
	wrapperEl.append(cardEl);
	parent.appendChild(wrapperEl);
}

export { c, q, uuidv4, createCard }