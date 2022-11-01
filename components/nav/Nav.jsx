import styles from './Nav.module.css'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  return (
    <div className={styles.logo}>
      <h1 onClick={() => router.push('/')}>
        <span>Book</span>marker
      </h1>
    </div>
  )
}

export default Nav
