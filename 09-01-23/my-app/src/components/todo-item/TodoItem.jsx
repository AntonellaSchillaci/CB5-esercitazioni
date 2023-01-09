export function TodoItem(props){
    const {children, isDone, changeStatus, index} = props;

    const clickHandler = () => {
        changeStatus(index, isDone)
    }

    return <li className='element'>
      { isDone ? '✅' : '❌' }  
      <span>{children}</span>
      <button onClick={clickHandler}>{ isDone ? 'Un-Done': 'Done'}</button>
    </li>
  }