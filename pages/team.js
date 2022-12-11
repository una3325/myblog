import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> 팀 프로젝트 소개 </h1>

        <nav className={styles.text}>
          <p>안녕하세요 저희는 책 리뷰 작성 사이트를 제작했습니다.</p>
          <p>팀원: 노수빈, 임혜준, 한유정, 양유나 입니다.</p>
          <Image src="/Images/123123.jpg" width={500} height={400}></Image>

          <p className={styles.ttt}>
            <a href="https://bookweb.vercel.app/">팀프로젝트 바로가기</a>
          </p>
        </nav>
      </main>
    </div>
  )
}
