import Nav from '../components/nav/Nav'

const NavLayout = ({ children }) => {
  return (
    <>
    
        <Nav />
        {children}

    </>
  )
}

export default NavLayout
