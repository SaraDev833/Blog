
import Card from './Card/Card'
import styles from './CardList.module.css'

const CardList = () => {
  return (
    <div className={styles.container}>
       <h2 className={styles.title}>Recent Posts</h2>
         <div className={styles.items}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
         </div>
    </div>
  )
}

export default CardList
