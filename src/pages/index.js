import React from 'react';
import { Element } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';

import siteData from '../const';

import Layout from '../components/arrangement/Layout/Layout';
import styles from '../style/Home.module.css';


const Home = () => {
  const aboutme = siteData.aboutme;

  return (
    <Layout classsName={styles.main}>
      <h1 className={styles.pageLogo}>
      Hi. I am meltomir.
      </h1>

      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/meltomirTopPagePic.png"
          alt="meltomir"
          width={200}
          height={200}
        ></Image>
      </div>


      <div className={styles.aboutme}>
        {aboutme}
      </div>

      <div>
        <navigation>
          <Link href="/Link">Links</Link>
          <span>     </span>
          <Link href="/Gallery">Gallery</Link>
        </navigation>

      </div>
    </Layout>
  )
}

export default Home;