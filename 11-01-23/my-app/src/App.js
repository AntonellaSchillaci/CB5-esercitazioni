import './App.css';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { BeerRandom } from './fetch/components/beer-random/BeerRandom';
import { CreditCards } from './fetch/components/credit-card/CreditCard';
import { Appliances } from './fetch/components/appliances/Appliances';


function App() {
  return (
    <>
      <div className='container'>
        <div className="bloodSection">
          <BloodTypes />
        </div>

        <div className="beerSection">
          <BeerRandom />
        </div>

        <div className="cardSection">
          <CreditCards />
        </div>

        <div className="applianceSection">
          <Appliances />
        </div>
      </div>
    </>
  );
}

export default App;
