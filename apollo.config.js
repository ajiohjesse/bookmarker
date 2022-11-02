import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: process.env.HYGRAPH_URI,
  headers: {
    authorization: process.env.HYGRAPH_BEARER_TOKEN,
  },

  // Provide some optional constructor fields
  name: 'react-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export default client
