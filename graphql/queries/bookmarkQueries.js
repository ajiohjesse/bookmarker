import { gql } from '@apollo/client'

export const GET_USER_BOOKMARKS = gql`
  query getUserBookmarks($username: String!) {
    bookmarks(where: { account: { username: $username } }) {
      id
      title
      desc
      url
      tags
    }
  }
`
