import React from 'react'
import Layout from '../components/arrangement/Layout/Layout'
import styles from '../style/Gallery.module.css'
import { getSortedPostsData } from '../../lib/artworks'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Gallery = ({ allPostsData }) => {
  return (
    <Layout>
    <h1>Gallery</h1>
    <section className={styles.gallery}>
      <div className={styles.wrapper}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
          <Link href={`/Gallery/${id}`} className={styles.listItem} key={id}>
            <div>
              <div className={styles.itemTitle}>{title}</div>
              <small className={styles.lightText}>{date}</small>
            </div>
            <Image src={thumbnail} alt={title} width={100} height={100} className={styles.thumbnail} />
          </Link>
        ))}
      </div>
    </section>
    </Layout>
  )
}

export default Gallery