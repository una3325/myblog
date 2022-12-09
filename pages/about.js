import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> 자기소개 </h1>
        <Image src="/Images/666.gif" width={400} height={300}></Image>
        <p>이름: 양유나</p>
        <p>전공: 정보보호학전공</p>
        <p>학번: 92113712</p>
        <p>나이: 21세</p>
        <p>
          <a href="https://diddbskb.tistory.com/">티스토리 블로그</a>
        </p>
        <p>
          <a href="https://bookweb.vercel.app/">팀 프로젝트</a>
        </p>
      </main>
    </div>
  )
}
