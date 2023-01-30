import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.App}>
      <h1>Hello, view the users</h1>
      <div className={styles.link}>
        <Link to="/users"><FaUserAlt /></Link>
      </div>
    </div>
  );
}

export default App;
