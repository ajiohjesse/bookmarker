import client from '../apollo.config'
import { GET_USER } from '../graphql/queries/userQueries'

const login = async (credentials) => {
  const { data } = await client.query({
    query: GET_USER,
    variables: {
      username: credentials.username,
    },
    fetchPolicy: 'network-only',
  })

  if (!data.account)
    return { success: false, token: null, msg: 'Account not found', user: null }

  const password = data.account.password

  if (credentials.password !== password)
    return {
      success: false,
      token: null,
      msg: 'Invalid username or password',
      user: null,
    }

  const token = await new jose.SignJWT(data.account)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(process.env.JWT)

  return { success: true, token, msg: null, user: data.account }
}

export default login
