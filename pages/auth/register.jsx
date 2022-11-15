import Link from 'next/link'
import { useState } from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import styles from '../../styles/Home.module.css'

const Register = () => {
  const [passwordType, setPasswordType] = useState('password')

  return (
    <AuthLayout>
      <div className={styles.login}>
        <h2>Create Account</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" required />
            <p className={styles.notice}>
              We&#39;ll only use this when recovering your password. No spam.
            </p>
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordInput}>
              <input type={passwordType} required />
              <span
                className={styles.passwordVisibility}
                onClick={() =>
                  passwordType === 'password'
                    ? setPasswordType('text')
                    : setPasswordType('password')
                }
              >
                {passwordType === 'password' ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </span>
            </div>
          </div>
          <button type="submit">Create account</button>
        </form>
        <div className={styles.links}>
          <Link href="/">Login</Link>
          <Link href="/auth/recovery">Reset password</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register
