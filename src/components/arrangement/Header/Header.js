import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll, Element } from 'react-scroll'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
      </ul>
    </div>
  )
}

export default Header