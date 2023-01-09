import {useState} from 'react';
import { InputGroup } from '../../atoms/input-group/InputGroup';
import { TodoItem } from "../todo-item/TodoItem"

export function TodoList(){
    const [items, setItems] = useState([]);


    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const formData = new FormData(formEl);
        const label = formData.get('addName');

        setItems((oldItems) => {
            const newItem = { label, isDone: false }
            return [...oldItems, newItem];
        })
    }

    const changeStatus = (index, currentStatus) => {
        setItems(oldItems => {
            const newItems = oldItems.concat([]);
            newItems[index].isDone = !currentStatus;
            return newItems;
        })
    }
  
    return <div className='container'>
      <h1>Todo list</h1>
      
        <form onSubmit={formSubmitHandler}>
            <InputGroup label={'Add things to do:'} name='addName' />
        </form>

      <ul>
        { items.map((item, index) => (
            <TodoItem key={index} 
                      index={index}
                      isDone={item.isDone}
                      changeStatus={changeStatus}
            >{item.label}</TodoItem>
        )) }
      </ul>
    </div>
  }