import { Link, Outlet } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BsSignpost2Fill } from 'react-icons/bs'
import styles from './App.module.scss';


function App() {
  return (
    <>
      <div className={styles.App}>
        <h1>Hi, what do you want to see today?</h1>
        <div className={styles.link}>
          <Link to="/users"><FaUserAlt /> Users</Link>
          <Link to="/posts"><BsSignpost2Fill /> Posts</Link>
        </div>
      </div>
      <Outlet />
    </>
    
  );
}

export default App;
