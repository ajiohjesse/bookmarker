import Link from 'next/link'
import styles from '../../../components/bookmarkForm/BookmarkForm.module.css'
import Container from '../../../components/ui/Container'

const EditBookmark = () => {
  return (
    <Container>
      <form className={styles.form}>
        <h2 className={styles.title}>Edit Bookmark</h2>
        <div className={styles.view}>
          <Link href="/dashboard">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
            </svg>
            View Bookmarks
          </Link>
        </div>

        <div className={styles.inputGroup}>
          <label>Title</label>
          <input type="text" placeholder="Color generator" />
        </div>
        <div className={styles.inputGroup}>
          <label>Url</label>
          <input type="text" placeholder="http://www.coolors.com" />
        </div>
        <div className={styles.inputGroup}>
          <label>Description</label>
          <textarea placeholder="A website to generate cool colors."></textarea>
        </div>
        <div className={styles.inputGroup}>
          <label>Tags</label>
          <input type="text" placeholder="design, colors, ui" />
        </div>
        <button type="submit">Save Bookmark</button>
        <button type="submit">Delete Bookmark</button>
      </form>
    </Container>
  )
}

export default EditBookmark
