import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll, Element } from 'react-scroll'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul> 
        <li><ScrollLink to="linklist" smooth={true} duration={500}>linklist</ScrollLink></li> 
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li> 
        <li><ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink></li> 
      </ul>
    </div>
  )
}

export default Header