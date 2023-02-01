import Link from 'next/link';
import { useRouter } from "next/router";
import styles from "./../../styles/User.module.scss"

// const User = ({ user }) => {
//   return (
//     <>
//         <div>
//              {/* <h1>{user.first} {user.last}</h1>
//              <p>{user.email}</p> */}
//              <h1></h1>
//              <Link href="/users">Torna alla lista degli utenti</Link>
//        </div>
//     </>
//   );
// };

// export async function getStaticPaths({ params }) {
//   const res = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
//   const users = await res.json();
//   const user = users.find(user => user.first === params.first);

//   return {
//     path: {
//       user,
//     },
//   };
// }

// export default User;

const User = () => {
    const router = useRouter();
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