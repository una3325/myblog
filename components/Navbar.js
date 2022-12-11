import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import React from 'react'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">자기소개</Link>
        <Link href="/profile">좋아하는 것</Link>
        <Link href="/team">팀 프로젝트</Link>
      </div>
    </div>
  )
}
