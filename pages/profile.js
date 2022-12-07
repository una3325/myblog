import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function profile() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>집가고싶당</h1>
        <Image src="/Images/666.gif" width={400} height={300}></Image>
        <p>나의 취미느느느는는</p>
        <p>뭐 쓰징..</p>
      </main>
    </div>
  )
}
