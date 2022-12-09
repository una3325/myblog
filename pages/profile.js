import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function profile() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>취미</h1>
        <Image src="/Images/555.gif" width={400} height={300}></Image>
        <p>취미는 음...</p>
      </main>
    </div>
  )
}
