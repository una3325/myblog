import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import React from 'react'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>양유나</a>
        </Link>
        <Link href="/about">
          <a>자기소개</a>
        </Link>
        <Link href="/profile">취미</Link>
        <Link href="/contact">좋아하는 것들</Link>
      </div>
    </div>
  )
}
