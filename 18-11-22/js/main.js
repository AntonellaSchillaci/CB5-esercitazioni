import { GET, POST, PATCH } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'

const url = "http://localhost:3000/pokemon"


const ul = q(".pokemonList")
const form = document.forms.pokemon;
const elements = form.elements

const formPatch = document.forms.pokemonPatch
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
	e.preventDefault();

	const id = elementsFP.id.value

	const data = {
		name: elementsFP.name.value,
		type: elementsFP.type.value
	}
	PATCH(url, id, data)
		.then(() => location.reload())
		.catch(e => console.log(e))
})




form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		id: uuidv4(),
		name: elements.name.value === "" ? "-----" : elements.name.value,
		type: elements.type.value
	}

	POST(url, data)
		.then(() => location.reload())
})


window.onload = GET(url)
	.then(res => res.map(pkm => {
		try {
			createCard(url, ul, pkm.img, pkm.name, pkm.type, pkm.id)
		} catch (error) {
			console.log(error)
		}
	}))
