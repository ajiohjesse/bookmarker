import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'
import * as jose from 'jose'

const token = Cookies.get('user')

let user

try {
  const { payload: user } = await jose.jwtVerify(token, process.env.JWT)

  username = user.username
} catch (error) {
  user = null
}

const INITIAL_STATE = {
  isLoggedIn: false,
  user: user || null,
  loading: false,
  error: null,
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        isLoggedIn: false,
        user: null,
        loading: true,
        error: null,
      }
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        error: null,
      }
    case 'LOGIN_FAILURE':
      return {
        isLoggedIn: false,
        user: null,
        loading: false,
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        isLoggedIn: false,
        user: null,
        loading: false,
        error: null,
      }

    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
