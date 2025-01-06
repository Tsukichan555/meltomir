import React from 'react'
import Head from 'next/head'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import siteData from '../../../const'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
  const siteTitle = siteData.title
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
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout;