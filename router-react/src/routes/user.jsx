import { useParams, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from 'react-icons/im';
import { FaUserAlt } from 'react-icons/fa';
import styles from "./styles/user.module.scss";

export default function User() {
  let { user } = useParams();
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <>
      <div className={styles.User} id={userData.id}>
        <div className={styles.content}>
          <img src={userData.image} alt={userData.username}></img>
          <h3>{userData.firstName} <br></br> {userData.lastName}</h3>
          <h5> Age: {userData.age}</h5>
          <div className={styles.btnContainer}>
            <button className={styles.buttonHome} onClick={() => { navigate("/"); } }><ImHome /></button>
            <button className={styles.buttonHome} onClick={() => { navigate("../users"); } }><FaUserAlt /></button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}