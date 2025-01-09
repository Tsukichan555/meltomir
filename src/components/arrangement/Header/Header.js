import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll, Element } from 'react-scroll';
import styles from './Header.module.css';
import { isAndroid, isIOS } from 'react-device-detect';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isAndroid || isIOS) {
      setIsMobile(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.Header}>
      {isMobile ? (
        <>
          <div className={styles.Burger} onClick={toggleMenu}>
            <div className={styles.BurgerLine}></div>
            <div className={styles.BurgerLine}></div>
          </div>
          <nav className={`${styles.Nav} ${isOpen ? styles.Open : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </>
      ) : (
        <nav>
          <ul className={`${styles.Nav} ${styles.DesktopNav}`}>
            <li><ScrollLink to="linklist" smooth={true} duration={500} style={{ cursor: "pointer" }}>linklist</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500} style={{ cursor: "pointer" }}>About</ScrollLink></li>
            <li><ScrollLink to="gallery" smooth={true} duration={500} style={{ cursor: "pointer" }}>Gallery</ScrollLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
