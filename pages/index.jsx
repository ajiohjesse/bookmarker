import Link from 'next/link'
import styles from '../styles/Home.module.css'
import AuthLayout from '../Layouts/AuthLayout'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie'
import Router from 'next/router'
import axios from 'axios'

export default function Home() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const { dispatch } = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    const loadingToast = toast.loading('Logging in')

    await axios
      .post('/api/login', credentials)
      .then(({ data }) => {
        if (!data.success) {
          dispatch({
            type: 'LOGIN_FAILURE',
            payload: data.msg,
          })
          toast.dismiss(loadingToast)
          return toast.error(data.msg)
        }

        toast.dismiss(loadingToast)
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.user })
        Cookies.set('user', data.token, { expires: 30 })
        toast.success('Logged in')
        Router.push('/dashboard')
        return
      })
      .catch((err) => {
        toast.dismiss(loadingToast)
        console.log(JSON.stringify(err, null, 2))
      })
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
