import NavLayout from '../Layouts/NavLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  )
}

export default MyApp
