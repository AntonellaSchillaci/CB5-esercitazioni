import './appliances.css';
import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function Appliances() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.APPLIANCES);
    
    if (loading) return `Loading...`;

    if (error) return `Errore!`;
    return (
        <section>
            {/* {JSON.stringify(data)} */}
            <div className='appliancesContainer'>
                <div className='appliances1'>
                    <img className="logo1" src="./images/fulmine.png" alt="beer" />
                    <h2>{data.equipment}</h2>
                </div> 
                <h3>Brand: {data.brand}</h3>
                <div className='buttonAppliances'>
                    <button className='button4' onClick={refetch}>Search 🔌</button>
                </div>
            </div>
        </section>
    )
}