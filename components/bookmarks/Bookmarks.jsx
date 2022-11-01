import Link from 'next/link'
import { useState } from 'react'
import PreviewCard from '../previewCard/PreviewCard'
import styles from './Bookmarks.module.css'

const Bookmarks = () => {
  const [selectedTag, setSelectedTag] = useState('all')

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="/dashboard/add-bookmark">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 2a.5.5 0 00-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 011 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 014.5 1h4a.5.5 0 010 1h-4zm9-1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add bookmark
          </Link>
        </div>

        <div className={styles.searchGroup}>
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
        </div>

        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>
    </div>
  )
}

export default Bookmarks
