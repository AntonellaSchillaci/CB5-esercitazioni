const mainReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO_TO_LIST":
        console.log(state);
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
        };
      case "REMOVE_TODO_FROM_LIST":
        return {
          ...state,
          todoList: state.todoList.filter((todo) => todo.id !== action.payload),
        };
      case "TOGGLE_TODO_STATUS":
        return {
          ...state,
          todoList: state.todoList.map(todo =>
            todo.id === action.payload
              ? { ...todo, status: !todo.status }
              : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default mainReducer;