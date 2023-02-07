import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import { RiDeleteBin7Fill } from 'react-icons/ri';
import styles from "./index.module.scss";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({
      type: "TOGGLE_TODO_STATUS",
      payload: data.id,
    });
  };

  const deleteClick = (e) => {
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div
      className={`${styles.TodoItem} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <div className={styles.container}>
        <p>🌺 {data.content}</p>
        <RiDeleteBin7Fill className={styles.icon} onClick={deleteClick}/>
      </div>
    </div>
  );
};

export default TodoItem;