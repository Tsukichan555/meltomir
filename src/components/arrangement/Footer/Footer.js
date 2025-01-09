import React from 'react';
import styles from './Footer.module.css';
import { siteData } from '../../../const';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.Footer}>
      <small>Copyright © 2024 meltomir. All Rights Reserved.</small>
    </div>
  )
}

export default Footer