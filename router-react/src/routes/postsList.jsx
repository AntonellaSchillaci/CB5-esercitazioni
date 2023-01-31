import { GET } from "./../utils/http";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from 'react-icons/im';
import styles from "./styles/usersList.module.scss"


export  default function PostsList() {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("posts").then(({ posts }) => setPostsList(posts));
  }, []);
  return (
    <div className={styles.UsersList}>
      <h1>Posts</h1>
      {postsList.map((post) => (
        <>
        <ul>
          <li onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</li>
        </ul>
        </>
      ))}
      <div className={styles.btnContainer}>
        <button className={styles.buttonHome} onClick={() => { navigate("/") }}><ImHome /></button>
      </div>
    </div>
  );
}