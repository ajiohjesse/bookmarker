import Nav from '../nav/Nav'

const Layout = ({ children }) => {
  return (
    <>
    
        <Nav />
        {children}

    </>
  )
}

export default Layout
