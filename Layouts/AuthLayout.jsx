import styles from '../styles/Home.module.css'
import bg from '../public/images/bg.jpg'
import Container from '../components/ui/Container'
import Image from 'next/image'

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.home}>
      <div className={styles.grid}>
        <div className={styles.heroImg}>
          <Image src={bg} fill alt="bookmaker" className={styles.img} />
        </div>

        <div className={styles.secondCol}>
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
