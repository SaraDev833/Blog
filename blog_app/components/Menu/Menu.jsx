import Image from 'next/image'
import styles from './menu.module.css'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <span>Choosed by editor</span>
        <h4>Editors choice</h4>
        <div className={styles.MenuList}>
            <div className={styles.ImageContainer}>
            <Image src='/p1.jpeg' width={32} height={32} style={{objectFit:'cover'}} className={styles.image}/>
            </div>
             <div className={styles.TextContainer}>
               <Link href='/' className={`${styles.category} ${styles.style}`} />
               <h5>Lorem ipsum dolor sit amet consectetur.</h5>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             </div>

        </div>
        </div>
    </div>
  )
}

export default Menu
