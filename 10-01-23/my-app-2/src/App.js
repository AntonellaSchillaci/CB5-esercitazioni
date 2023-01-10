import { useState } from 'react';
import './App.css';

function App(){
  const [number, setNumber] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const [number4, setNumber4] = useState();
  const [number5, setNumber5] = useState();
  const [number6, setNumber6] = useState();

  const pickANumber = () => Math.round(Math.random() * 91);
  const pickANumber2 = () => Math.round(Math.random() * 91);
  const pickANumber3 = () => Math.round(Math.random() * 91);
  const pickANumber4 = () => Math.round(Math.random() * 91);
  const pickANumber5 = () => Math.round(Math.random() * 91);
  const pickANumber6 = () => Math.round(Math.random() * 91);

  const lotteryButtonClick = () => {
    const newNumber = pickANumber();
    const newNumber2 = pickANumber2();
    const newNumber3 = pickANumber3();
    const newNumber4 = pickANumber4();
    const newNumber5 = pickANumber5();
    const newNumber6 = pickANumber6();

    setNumber(newNumber); 
    setNumber2(newNumber2);
    setNumber3(newNumber3); 
    setNumber4(newNumber4); 
    setNumber5(newNumber5); 
    setNumber6(newNumber6); 
  }

  return (
    <div className='container'>
      <h1>Lotteria</h1>
      <p>Numeri estratti: {number} - {number2} - {number3} - {number4} - {number5} - {number6}</p>
      <LotteryButton wasDraw={Number.isInteger(number, number2)} clickHandler={lotteryButtonClick} />
    </div> 
  );
}

function LotteryButton (props){
  const {
    clickHandler,
    wasDraw, 
    ...attributes
  } = props;

  return <button 
                 disabled={!!wasDraw}
                 onClick={clickHandler}
                 {...attributes}
  >{!!wasDraw ? 'Numeri estratti' : 'Clicca per estrarre 6 numeri'}</button>
}

export default App;