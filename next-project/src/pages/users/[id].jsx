import Link from 'next/link';
import { useRouter } from "next/router";
import {useState, useEffect} from 'react';
import styles from "./../../styles/User.module.scss"

const User = () => {
    const router = useRouter()
    const id = router.query.id;
    console.log(router);
  
    return (
        <div className={styles.User}>
            <h1>User: {id}</h1>
            <Link href="/users">Torna alla lista degli utenti</Link>
        </div>
    );
  };
  
  export default User;