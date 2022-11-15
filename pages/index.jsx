import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AuthLayout from '../Layouts/AuthLayout'

export default function Home() {
  return (
    <AuthLayout>
      <div className={styles.login}>
        <div className={styles.links}>
          <Link href="/login">Login</Link>
          <Link href="/auth/register">Create account</Link>
          <Link href="/auth/recovery">Reset password</Link>
        </div>
      </div>
    </AuthLayout>
  )
}
