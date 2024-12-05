import Link from 'next/link'
import styles from './MenuList.module.css'
import Image from 'next/image'

const MenuList = ({withImage}) => {
  return (
    <div className={styles.menu}>

    <div className={styles.MenuList}>

       {withImage && (
         <div className={styles.ImageContainer}>
         <Image src='/p1.jpeg' width={45} height={45} style={{objectFit:'cover'  , borderRadius: '100%'}} className={styles.image} alt='image'/>
         </div>
       )}
         <div className={styles.TextContainer}>
          <Link href='/' className={`${styles.category} ${styles.style}`}>Style</Link>
           <p className={styles.tag}>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet.</p>
          <div>
          <span className={styles.name}>John Doe</span>
          <span className={styles.date}>- 02/12/24</span>
          </div>
         </div>

    </div>

    <div className={styles.MenuList}>

       {withImage && (
         <div className={styles.ImageContainer}>
         <Image src='/p1.jpeg' width={45} height={45} style={{objectFit:'cover'  , borderRadius: '100%'}} className={styles.image} alt='image'/>
         </div>
       )}
         <div className={styles.TextContainer}>
          <Link href='/' className={`${styles.category} ${styles.fashion}`}>Fashion</Link>
           <p className={styles.tag}>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet.</p>
          <div>
          <span className={styles.name}>John Doe</span>
          <span className={styles.date}>- 02/12/24</span>
          </div>
         </div>

    </div>
    <div className={styles.MenuList}>

       {withImage && (
         <div className={styles.ImageContainer}>
         <Image src='/p1.jpeg' width={45} height={45} style={{objectFit:'cover'  , borderRadius: '100%'}} className={styles.image} alt='image'/>
         </div>
       )}
         <div className={styles.TextContainer}>
          <Link href='/' className={`${styles.category} ${styles.coding}`}>coding</Link>
           <p className={styles.tag}>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet.</p>
          <div>
          <span className={styles.name}>John Doe</span>
          <span className={styles.date}>- 02/12/24</span>
          </div>
         </div>

    </div>
    </div>
  )
}

export default MenuList
