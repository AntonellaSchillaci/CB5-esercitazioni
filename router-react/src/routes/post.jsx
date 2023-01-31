import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImHome } from 'react-icons/im';
import { BsSignpost2Fill } from 'react-icons/bs'
import styles from "./styles/user.module.scss";

export default function Post() {
  let { post } = useParams();
  
  const navigate = useNavigate();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [post]);

  return (
    <>
      <div className={styles.User} id={postData.id}>
        <div className={styles.content}>
          <h3>{postData.title}</h3>
          <p> {postData.body}</p>
          <div className={styles.btnContainer}>
            <button className={styles.buttonHome} onClick={() => { navigate("/"); } }><ImHome /></button>
            <button className={styles.buttonHome} onClick={() => { navigate("../posts"); } }><BsSignpost2Fill /></button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}