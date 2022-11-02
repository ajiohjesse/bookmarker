import { gql } from '@apollo/client'

export const GET_USER = gql`
  query getUserPass($username: String!) {
    account(where: { username: $username }) {
      id
      firstname
      username
      email
      password
    }
  }
`
