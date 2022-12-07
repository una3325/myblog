import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
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
        <Link href="/profile">
          <a>취미</a>
        </Link>
        <Link href="/contact">
          <a>좋아하는 것들</a>
        </Link>
      </div>
    </div>
  )
}
