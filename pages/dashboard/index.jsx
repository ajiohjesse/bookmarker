import client from '../../apollo.config'
import Bookmarks from '../../components/bookmarks/Bookmarks'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { GET_USER_BOOKMARKS } from '../../graphql/queries/bookmarkQueries'
import styles from '../../styles/Dashboard.module.css'

const Dashboard = ({ bookmarks }) => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Section className={styles.welcome} bleed>
          <Section className={styles.text}>
            <h2>Save Your Ideas.</h2>
            <p>
              Hello <span>Jesse</span>. These are your bookmarks:
            </p>
          </Section>
        </Section>
        <Bookmarks bookmarks={bookmarks} />
      </Container>
    </div>
  )
}

export default Dashboard

export const getServerSideProps = async () => {
  const res = await client.query({
    query: GET_USER_BOOKMARKS,
    variables: {
      username: 'rehxofficial',
    },
  })

  const data = res.data.bookmarks

  return {
    props: {
      bookmarks: data,
    },
  }
}
