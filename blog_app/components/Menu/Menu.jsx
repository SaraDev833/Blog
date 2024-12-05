import Image from 'next/image'
import styles from './menu.module.css'
import Link from 'next/link'
import MenuList from './MenuList/MenuList'

const Menu = () => {
  return (
    <div className={styles.container}>
<div>
<span className={styles.edit}>Whats hot</span>
          <h4 className={styles.choice}>Most Popular</h4>
    <MenuList withImage={false}/>
    
</div>
    <div className={styles.catContent}>
      <h4 className={styles.choice} >Categories</h4>
      <div className={styles.box}>
      <Link href='/' className={`${styles.catItem} ${styles.fashion}`}>
       Fashion
      </Link>
      <Link href='/' className={`${styles.catItem} ${styles.food}`}>
       Food
      </Link>
      <Link href='/' className={`${styles.catItem} ${styles.coding}`}>
       Coding
      </Link>
      </div>
    </div >
 <div className={styles.move} >
 <span className={styles.edit} >Choosed by editor</span>
    <h4 className={styles.choice}>Editors choice</h4>
    <MenuList withImage={true} />
 </div>
 
    </div>
  )
}

export default Menu
