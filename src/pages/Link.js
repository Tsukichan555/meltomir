import React from 'react'
import { siteData } from '../const';
import Layout from '../components/arrangement/Layout/Layout';
import styles from '../style/Link.module.css';

const SocialLink = ({ url, line }) => {
  return (
      <a href={url} className={styles.linkButton}>{line}</a>
  )
}

const Link = () => {
  const { shop: shop, writing: writing, social: social } = siteData.link;
  return (
    <Layout>
      <article className={styles.wrapper}>
        <h3>Shop My Creations:</h3>
        <div className={styles.linkWrapper}>
            <SocialLink url={shop.base} line="BASE" />
            <SocialLink url={shop.booth} line="BOOTH" />
        </div>

        <h3>My Writings:</h3>
        <div className={styles.linkWrapper}>
            <SocialLink url={writing.note} line="note" />
        </div>

        <h3>Find me on:</h3>
        <div className={styles.linkWrapper}>
            <SocialLink url={social.instagram} line="instagram" />
            <SocialLink url={social.x} line="X" />
        </div>
      </article>

    </Layout>
  )
}

export default Link