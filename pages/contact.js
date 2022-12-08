import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>으개갹</h1>
        <Image src="/Images/444.gif" width={400} height={300}></Image>
        <Image src="/Images/333.png" width={400} height={300}></Image>
        <p>호빵 먹고싶당</p>
        <p>뭐 쓰징..</p>
      </main>
    </div>
  )
}
