import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: process.env.HYGRAPH_URI,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.HYGRAPH_BEARER_TOKEN,
    },
  }
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: authLink.concat(httpLink),

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
