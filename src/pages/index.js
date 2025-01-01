import React from 'react';
import Base from '../components/arrangement/Base';
import Layout from '../components/arrangement/Layout';
import ThreeDModel from '../components/features/ThreeDModel/ThreeDModel';
import LinkList from '../components/features/LinkList/LinkList';
import About from '../components/features/About/About';
import Gallery from '../components/features/Gallery/Gallery.js';
import { Element } from 'react-scroll';
import Image from 'next/image';
import style from '../style/Home.module.css';
  


const Home = () => {
  return (
    <Base>
      <Layout>

      <Element name="home" className={style.element}>
        <h1>
          Meltomir
          <Image src="/gunpaku.svg" width={80} height={80} alt="" />
        </h1>
        <ThreeDModel />
      </Element>

      <Element name="linklist" className={style.element}>
        <LinkList />
      </Element>

      <Element name="about" className={style.element}>
        <About />
      </Element>

      <Element name="gallery" className={style.element}>
        <Gallery />
      </Element>
           
        
      </Layout>
    </Base>
  )
}

export default Home;