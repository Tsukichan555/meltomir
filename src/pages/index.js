import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '../const';

import Layout from '../components/arrangement/Layout/Layout';
import styles from '../style/Home.module.css';


const Home = () => {
  const mainImage = {
    src: "/meltomirTopPagePic.png",
    alt: "meltomir",
    width: 200,
    height: 200
  };

  return (
    <Layout classsName={styles.main}>
      <h1 className={styles.pageLogo}>
        {siteData.title}
      </h1>

      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={mainImage.src}
          alt={mainImage.alt}
          width={mainImage.width}
          height={mainImage.height}
        ></Image>
      </div>


      <div className={styles.aboutme}>
        {siteData.aboutme}
      </div>

      <div>
        臨時リンク:
        <br />
        <navigation>
          <Link href="/Link">Links</Link>
          <br />
          <Link href="/Gallery">Gallery</Link>
        </navigation>
      </div>
    </Layout>
  )
}

export default Home;