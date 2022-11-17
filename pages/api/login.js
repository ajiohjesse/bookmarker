import * as jose from 'jose'
import client from '../../apollo.config'
import { GET_USER } from '../../graphql/queries/userQueries'

export default async function handler(req, res) {
  const { username, password } = req.body

  const { data } = await client.query({
    query: GET_USER,
    variables: {
      username,
    },
    fetchPolicy: 'network-only',
  })

  if (!data.account)
    return res.json({
      success: false,
      token: null,
      user: null,
      msg: 'Account not found',
    })

  const savedPassword = data.account.password

  if (password !== savedPassword)
    return res.json({
      success: false,
      token: null,
      user: null,
      msg: 'Invalid username or password',
    })

  const token = await new jose.SignJWT(data.account)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(new TextEncoder().encode(process.env.JWT))

  return res.json({ success: true, token, msg: null, user: data.account })
}
