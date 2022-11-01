import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AuthLayout from '../Layouts/AuthLayout'

export default function Home() {
  return (
    <AuthLayout>
      <div className={styles.login}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" required />
          </div>
          <button>Login</button>
        </form>
        <div className={styles.links}>
          <Link href="/auth/register">Create account</Link>
          <Link href="/auth/recovery">Reset password</Link>
        </div>
      </div>
    </AuthLayout>
  )
}
