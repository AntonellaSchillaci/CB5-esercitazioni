
import { useReducer } from "react";
import { ApplicationCtx, initialState } from "./store/state";
import mainReducer from "./store/reducer";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todoList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <Navbar />
        <TodoList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;