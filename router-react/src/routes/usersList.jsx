import { GET } from "./../utils/http";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from 'react-icons/im';
import styles from "./styles/usersList.module.scss"


export  default function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("users").then(({ users }) => setUsersList(users));
  }, []);
  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      {usersList.map((user) => (
        <>
        <ul>
          <li onClick={() => navigate(`/users/${user.id}`)}>
            <img src={user.image} alt={user.firstName}></img>
            {user.firstName} {user.lastName}</li>
        </ul>
        </>
      ))}
      <div className={styles.btnContainer}>
        <button className={styles.buttonHome} onClick={() => { navigate("/") }}><ImHome /></button>
      </div>
    </div>
  );
}