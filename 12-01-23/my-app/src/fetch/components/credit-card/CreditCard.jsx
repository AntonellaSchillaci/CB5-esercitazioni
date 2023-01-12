import './credit-card.css';
import { useFetch } from '../../hooks/use-fetch';
import { ENDPOINTS } from '../../constants/endpoints';

export function CreditCards() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.CREDIT_CARDS);
    
    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    if(!data) return '';

    return (
        <section className='cardSection'>
            <div className='cardContainer'>
                <div className="card1">
                    <img className="logo1" src="./images/card.png" alt="card" />
                    <h2>{data.credit_card_number}</h2>
                </div> 
                <h3> Scadenza:  {data.credit_card_expiry_date}</h3>
                <div className='buttonCard'>
                    <button className='button3' onClick={refetch}>Create 💳</button>
                </div>
            </div>
        </section>
    )
}