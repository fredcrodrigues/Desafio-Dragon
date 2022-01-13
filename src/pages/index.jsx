import Head from 'next/head'
import Login from "../components/Login"
import styles from '../styles/login.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Dragons</title>
        <meta name="description" content="Dragons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login/>
      </main>

    </div>
  )
}
