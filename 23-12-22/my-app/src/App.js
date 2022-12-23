import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
     if(todo!== '') {
      setTodos([{id: `${todo}-${Date.now()}`,todo}, ...todos])
      setTodo("");
     }
  }

  const Done = (id) => {
    const doneTodo = todos.filter((to) => to.id !== id);
    setTodos([...doneTodo]);
  };

  return (
    <div className= 'App'>
      <div className='container'>
        <h1>To do List</h1>
        <form className='todoForm' onSubmit={Submit}>
          <input 
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>

        <ul className='list'>
          {
            todos.map((t) => (
              <li className='element'>
              <span className='element' key={t.id}>{t.todo}</span>
              <button onClick={() => Done(t.id)}>Done</button>
              
          </li>
          ))}
        </ul>
      </div>
 
    </div>
  );
}

export default App;