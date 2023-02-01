import Link from 'next/link';

import styles from './../../styles/Users.module.scss';

const Users = ({ users }) => {
  return (
    <>
        <div className={styles.Users}>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                <li key={user.first}>
                    {user.first} {user.last}
                </li>
                ))}
            </ul>      
            <Link href="/">Torna alla home</Link>
        </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;