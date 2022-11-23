import NextProgress from 'next-progress'
import NavLayout from '../Layouts/NavLayout'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import client from '../apollo.config'
import { AuthContextProvider } from '../context/AuthContext'
import '../_customGlobals'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <NavLayout>
          <NextProgress
            delay={300}
            options={{ showSpinner: false }}
            height="4px"
          />
          <Toaster />
          <Component {...pageProps} />
        </NavLayout>
      </ApolloProvider>
    </AuthContextProvider>
  )
}

export default MyApp
