import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home - my Blog </title>
      </Head>
      <Link href="about">My Blog</Link>
      <main className={styles.main}>
        <h1 className={styles.homeTitle}>안녕하세요</h1>
        <Image src="/Images/777.gif" width={400} height={300}></Image>
      </main>
    </div>
  )
}
