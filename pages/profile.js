import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function profile() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>좋아하는 것</h1>
        <Image src="/Images/444.gif" width={400} height={300}></Image>
        <nav className={styles.text}>
          <p className={styles.ttt}>
            <a href="https://comic.naver.com/webtoon/detail?titleId=796152&no=1&weekday=tue">
              웹툰: 마루는 강쥐 1화 보러가기
            </a>
          </p>
          <p className={styles.ttt}>
            <a href="https://www.youtube.com/@Lokid">
              노래: 로키드 노래 들으러 가기
            </a>
          </p>
          <p className={styles.ttt}>
            <a href="https://www.youtube.com/@calmdownman_official">
              유튜브: 침착맨 보러 가기
            </a>
          </p>
        </nav>
      </main>
    </div>
  )
}
