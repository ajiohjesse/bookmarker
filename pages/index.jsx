import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AuthLayout from '../Layouts/AuthLayout'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
import login from '../lib/login'
import Cookies from 'js-cookie'
import Router from 'next/router'

export default function Home() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const { loading, error, dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    console.log(credentials)

    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })

    const data = await login(credentials)

    console.log('data', data)

    // .then((res) => {
    //   if (!res.success) {
    //     dispatch({
    //       type: 'LOGIN_FAILURE',
    //       payload: res.msg,
    //     })
    //     return toast.error(res.msg)
    //   }

    //   dispatch({ type: 'LOGIN_SUCCESS', payload: res.user })
    //   Cookies.set('user', res.token, { expires: 30 })
    //   toast.success('Logged in')
    //   Router.push('/dashboard')
    //   return
    // })
  }

  return (
    <AuthLayout>
      <div className={styles.login}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input type="text" required id="username" onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              required
              id="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <div className={styles.links}>
          <Link href="/auth/register">Create account</Link>
          <Link href="/auth/recovery">Reset password</Link>
        </div>
      </div>
    </AuthLayout>
  )
}
