import Head from 'next/head'
import Link from "next/link";
import styles from "./../styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Home}>
        <h1>Home</h1>
        <div className={styles.linkUsers} >
          <Link href="/users">Users</Link>
        </div>
      </div>
    </>
  )
}