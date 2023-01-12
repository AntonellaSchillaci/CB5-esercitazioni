import './counter.css';
import { useCounter } from './../hooks/use-counter';

export function Counter (){
    const {
        count, 
        increment, 
        decrement, 
        reset
    } = useCounter();

    return <section className={'Counter'}>
        <div className='counter1'>
            <img className="logo1" src="./images/calcolatrice.png" alt="calculator" />
            <h2>Counter</h2>
        </div>
        <div>
            <button className='buttonDec' onClick={decrement}>-1</button>
            <output className='result'>{count}</output>
            <button className='buttonInc' onClick={increment}>+1</button>
        </div>
        <button className='reset'onClick={reset}>Reset</button>
    </section>
}