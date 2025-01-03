import React from 'react';
import { Element } from 'react-scroll';
import Image from 'next/image';

import siteData from '../const';

import Layout from '../components/arrangement/Layout';
import styles from '../style/Home.module.css';


const Home = () => {
  const aboutme = siteData.aboutme;
  return (
      <Layout>

        <h1 className={styles.pageLogo}>Hi. I am meltomir.</h1>
        
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/meltomirTopPagePic.png"
            alt="meltomir"
            width={200}
            height={200}
          ></Image>
        </div>

        <div>
          {aboutme}
        </div>
      </Layout>
  )
}

export default Home;