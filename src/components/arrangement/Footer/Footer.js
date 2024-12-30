import React from 'react';
import styles from './Footer.module.css';
import siteData from '../../../const';

const Footer = () => {
  const instagramUrl = siteData.link.social.instagram;
  const xUrl = siteData.link.social.x;

  return (
    <div className={styles.Footer}>
      Footer
      <div>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div>
        <a href={xUrl} target="_blank" rel="noopener noreferrer">X</a>
      </div>
    </div>
  )
}

export default Footer