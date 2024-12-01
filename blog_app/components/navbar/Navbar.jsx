import Image from 'next/image'
import styles from './Navbar.module.css'
import ThemeToggle from '../theme/ThemeToggle'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
             <Image src='/facebook.png' height={24} width={24} alt='facebook'/>
             <Image src= '/instagram.png' height={24} width={24} alt='instagram'/>
             <Image src='/tiktok.png' height={24} width={24} alt='tiktok'/>
        </div>
        <div className={styles.logo} >
                Blog
        </div>
        <div className={styles.links}>
              <ThemeToggle/>
              <Link href='/' className={styles.navLink}>Home</Link>
              <Link href='/about'  className={styles.navLink}>About</Link>
              <Link href='/contact' className={styles.navLink}>Contact</Link>
              <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar
