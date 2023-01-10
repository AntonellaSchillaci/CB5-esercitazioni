import { useEffect, useState } from 'react';
import './App.css';

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE}/beers`;
  }
}

function useRandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewBeer = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.BEERS)
      .then(r => r.json())
      .then(beer => {
        console.log({ beer });
        setRandomBeer(beer)
      })
      .catch((err) => {
        console.error(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchNewBeer();
  }, [])

  return { randomBeer, loading, setLoading, error, fetchNewBeer };
}

function App() {
  const { 
    randomBeer, 
    loading, 
    error, 
    fetchNewBeer 
  } = useRandomBeer();

  if(loading){
    return `Caricamento in corso...`;
  }

  if(error || !randomBeer){
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }

  const {id, brand, name, style, alcohol} = randomBeer;

  return (
  <>
    <div class="navbar">
      <img class="logo" src="./logoBeer.png" alt="logo"></img>
      <h4>Check out the tip</h4>
    </div>
    <div className='container'>
      <div className="App">
        <div id="code">Beer code: {id}</div>
        <h1>{brand} - {name}</h1>
        <h2>{style} - {alcohol}</h2>
        <button className="buttonRandom"onClick={() => fetchNewBeer()}>Cheers! 🍻</button>
      </div>
    </div>
   
  </>
  );
} 

export default App;