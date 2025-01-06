import React from 'react'
import siteData from '../const';
import Layout from '../components/arrangement/Layout/Layout';
import styles from '../style/Link.module.css';

const Link = () => {
  const { shop: shop, writing: writing, social: social } = siteData.link;
  return (
    <Layout>
        <div>
        <h3>Shop My Creations:</h3>
        <div>
          <ul>
            <li><a href={shop.base}>BASE</a></li>
            <li><a href={shop.booth}>BOOTH</a></li>
          </ul>
        </div>
      </div>

      <div>
        <h3>My Writings:</h3>
        <div>
          <ul>
            <li><a href={writing.note}>note</a></li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3>Find me on:</h3>
        <div>
          <ul>
            <li><a href={social.instagram}>instagram</a></li>
            <li><a href={social.x}>X</a></li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}

export default Link