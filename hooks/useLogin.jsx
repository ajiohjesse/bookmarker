import { useLazyQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries/userQueries'

const useLogin = ({ username, password }) => {
  const [login, { data, loading, error }] = useLazyQuery(GET_USER, {
    variables: {
      username,
    },
  })

  return { data, loading, error, login }
}

export default useLogin
