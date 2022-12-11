import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> yuna's blog </title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.homeTitle}>안녕하세요</h1>
        <p>양유나 개인 포트폴리오 입니다</p>
        <Image src="/Images/777.gif" width={900} height={600}></Image>
      </main>
    </div>
  )
}
