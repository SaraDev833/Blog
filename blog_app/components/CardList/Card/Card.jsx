import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.item}>
      <div className={styles.ImageContainer}>
   <Image src='/p1.jpeg'   alt='blog' height={200} width={350} className={styles.image}/>
      </div>
      <div className={styles.TextContainer}>
          <div className={styles.sub}>
          <span className={styles.date}>01.12.2024 -</span>
          <span className={styles.category}>Culture</span>
          </div>
          <h2 className={styles.head}>Lorem, ipsum dolor sit amet consectetur</h2>
          <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aperiam debitis repellendus..</p>
          <div className={styles.link}>
          <Link href='/' className={styles.read}>
          Read More
          </Link>
          </div>
         
      </div>
    </div>
  )
}

export default Card
