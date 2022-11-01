import Bookmarks from '../../components/bookmarks/Bookmarks'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import styles from '../../styles/Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Section className={styles.welcome} bleed>
          <Section className={styles.text}>
            <h2>Save Your Ideas.</h2>
            <p>Hello <span>Jesse</span>. These are your bookmarks:</p>
          </Section>
        </Section>
        <Bookmarks />
      </Container>
    </div>
  )
}

export default Dashboard
