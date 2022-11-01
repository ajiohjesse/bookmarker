import Link from 'next/link'
import AuthLayout from '../../Layouts/AuthLayout'
import styles from '../../styles/Home.module.css'

const recovery = () => {
  return (
    <AuthLayout>
      <div className={styles.login}>
        <h2>Recover Password</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" required/>
          </div>
          <button>Reset password</button>
        </form>
        <div className={styles.links}>
          <Link href="/">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/recovery">Reset password</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default recovery
