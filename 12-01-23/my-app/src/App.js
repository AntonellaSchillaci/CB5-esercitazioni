import './App.css';
import { useState } from 'react';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
import { BeerRandom } from './fetch/components/beer-random/BeerRandom';
import { CreditCards } from './fetch/components/credit-card/CreditCard';
import { Appliances } from './fetch/components/appliances/Appliances';
import { Counter } from './counter/components/Counter';

function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select defaultValue={''} onChange={selectChangeHandler}>
        <option disabled value="">Select a component to render</option>
        <option value='bloodTypes'>Random blood type</option>
        <option value='beerRandom'>Random beer</option>
        <option value='creditCard'>Random credit card</option>
        <option value='appliances'>Random appliances</option>
        <option value='counter'>Counter</option>
      </select>
    </form>
  )
}

function DefaultComponent () {
  return <div className='selected'>You have not selected a componentxs</div>
}

const componentMap = {
  bloodTypes: BloodTypes,
  beerRandom: BeerRandom,
  creditCard: CreditCards,
  appliances: Appliances,
  counter: Counter,
  default: DefaultComponent
}
function App() {
  
  const [componentToRender, setComponentToRender] = useState('default');

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">

      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}

export default App;
