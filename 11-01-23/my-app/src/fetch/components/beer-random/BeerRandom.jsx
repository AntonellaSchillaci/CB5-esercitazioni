import './beer-random.css';
import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function BeerRandom() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BEERS);
    
    if (loading) return `Loading...`;

    if (error) return `Errore!`;
    return (
        <section>
        {/* {JSON.stringify(data)} */}
            <div className='beerContainer'>
                <div className="beer1">
                    <img className="logo1" src="./images/logoBeer.png" alt="beer" />
                    <h2>{data.brand} - {data.name}</h2>
                </div> 
                <h3>{data.style} - {data.alcohol}</h3>
                <div className='buttonBeer'>
                    <button className='button2' onClick={refetch}>Cheers!🍻</button>
                </div>
            </div>
        </section>
    )
}