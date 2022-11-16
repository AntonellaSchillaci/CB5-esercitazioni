import { GET, POST } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'

const ul = q(".pokemonList")
const form = document.forms.pokemon;
const elements = form.elements


const url = "http://localhost:3000/pokemon"


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
