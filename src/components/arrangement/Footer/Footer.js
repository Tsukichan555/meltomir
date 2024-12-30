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
        <ul>
          <li>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href={xUrl} target="_blank" rel="noopener noreferrer">X</a>
          </li>
        </ul>
      </div>
      <small>Copyright © 2024 meltomir. All Rights Reserved.</small>
    </div>
  )
}

export default Footer