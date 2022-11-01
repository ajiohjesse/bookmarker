import Link from 'next/link'
import { useState } from 'react'
import PreviewCard from '../components/previewCard/PreviewCard'
import styles from '../styles/Bookmarks.module.css'

const Bookmarks = () => {
  const [selectedTag, setSelectedTag] = useState('all')

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z"></path>
              </g>
            </svg>
            Back
          </Link>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <button>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <div className={styles.filter}>
          <label>Filter Tags:</label>
          <input
            type="text"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          />
          <button onClick={() => setSelectedTag('all')}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"
              ></path>
            </svg>
          </button>
        </div>

        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>
    </div>
  )
}

export default Bookmarks
