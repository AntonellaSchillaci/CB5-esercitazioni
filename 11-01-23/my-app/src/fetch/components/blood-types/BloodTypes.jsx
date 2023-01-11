import './blod-types.css';
import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function BloodTypes() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BLOOD_TYPES);
    if (loading) return `Loading...`;

    if (error) return `Errore!`;
    return (
        <section>
        {/* {JSON.stringify(data)} */}
            <div className='bloodContainer'>
                <div className="blood1">
                    <img className="logo1" src="./images/goccia.webp" alt="blood" />
                    <h2>Gruppo: {data.group}</h2> 
                </div>
                <h3> RH: {data.rh_factor}</h3>
                <div className='buttonCont'>
                    <button className='button1'onClick={refetch}>Discover 🩸</button>
                </div>
            </div>
            
        </section>
    )
}
                    