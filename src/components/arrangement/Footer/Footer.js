import React from 'react';
import styles from './Footer.module.css';
import siteData from '../../../const';
import Link from 'next/link';

const Footer = () => {
  const instagramUrl = siteData.link.social.instagram;
  const xUrl = siteData.link.social.x;

  return (
    <div className={styles.Footer}>
      {/*<ul>
          <li>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href={xUrl} target="_blank" rel="noopener noreferrer">X</a>
          </li>
        </ul>*/}
      <navigation>
        <Link href="/Link">Links</Link>
        <br />
        <Link href="/Gallery">Gallery</Link>
      </navigation>
      <br />
      <small>Copyright © 2024 meltomir. All Rights Reserved.</small>
    </div>
  )
}

export default Footer