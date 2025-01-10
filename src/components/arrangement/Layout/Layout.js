import React from 'react'
import Head from 'next/head'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { siteData } from '../../../const'
import Image from 'next/image'

import styles from './Layout.module.css'

const Layout = ({ children, post }) => {
  const siteTitle = siteData.title
  const bigHeaderImg = {
    height: 150,
    width: 1000
  };
  return (
    <div className={styles.Layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="meltomir's portfolio site" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Header />
      {post && <Image className={styles.bigHeaderImg} src={post.thumbnail} alt={post.title} width={bigHeaderImg.width} height={bigHeaderImg.height} /> }
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout;