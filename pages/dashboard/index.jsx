import client from '../../apollo.config'
import Bookmarks from '../../components/bookmarks/Bookmarks'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import { GET_USER_BOOKMARKS } from '../../graphql/queries/bookmarkQueries'
import styles from '../../styles/Dashboard.module.css'

const Dashboard = ({ bookmarks }) => {
  if (!bookmarks) return <p>Error fetching bookmarks</p>

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
  let res = null

  try {
    await client
      .query({
        query: GET_USER_BOOKMARKS,
        variables: {
          username: 'rehxofficial',
        },
      })
      .then(({ data }) => (res = data))
      .catch(() => {
        return null
      })
  } catch (error) {
    return null
  }

  const data = res ? res.bookmarks : null

  return {
    props: {
      bookmarks: data,
    },
  }
}
