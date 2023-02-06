import { useState, useReducer } from 'react';
import styles from './index.module.scss';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.Counter}>
      <button  className={styles.button} onClick={() => dispatch({type: 'decrement'})}>➖</button>
      {state.count}
      <button className={styles.button} onClick={() => dispatch({type: 'increment'})}>➕</button>
    </div>
  );
}

export default Counter;