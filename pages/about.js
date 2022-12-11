import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> 자기소개 </h1>
        <Image src="/Images/555.gif" width={400} height={300}></Image>

        <nav className={styles.text}>
          <p>안녕하세요 중부대학교 정보보호학전공 양유나 입니다~</p>
          <p className={styles.ttt}>
            <a href="https://github.com/una3325">깃허브 바로가기</a>
          </p>
          <p className={styles.ttt}>
            <a href="https://diddbskb.tistory.com/">티스토리 블로그 바로가기</a>
          </p>
          <p className={styles.ttt}>
            <a href="https://blog.naver.com/chzh3325">네이버 블로그 바로가기</a>
          </p>
        </nav>
      </main>
    </div>
  )
}
