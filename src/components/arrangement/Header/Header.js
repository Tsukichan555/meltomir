import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll, Element } from 'react-scroll'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <nav>
        <ul> 
          <li><ScrollLink to="linklist" smooth={true} duration={500} style={{ cursor: "pointer" }}>linklist</ScrollLink></li> 
          <li><ScrollLink to="about" smooth={true} duration={500} style={{ cursor: "pointer" }}>About</ScrollLink></li> 
          <li><ScrollLink to="gallery" smooth={true} duration={500} style={{ cursor: "pointer" }}>Gallery</ScrollLink></li> 
        </ul>
      </nav>
    </div>
  )
}

export default Header