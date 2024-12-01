import Image from 'next/image';
import styles from './Featured.module.css';
import { localFont } from 'next/font/local';
const Featured = () => {
  return (
    <div className={styles.container}>
    <h2 className={styles.light}>
       <b className={styles.bold}>Lorem ipsum dolor sit amet, consectetur adipisicing </b>elit. Consectetur illum temporibus consequatur modi quo iure!
    </h2>
    <div className={styles.post}>
         <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' width={300} height={200} alt='post' className={styles.image}/>
         </div>
         <div className={styles.textContainer}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae harum rerum accusamus temporibus voluptates fugit? Officiis porro ducimus eveniet.</p>
          <button className={styles.button}>
             Read More
          </button>
         </div>
         <div>

         </div>
    </div>
    </div>
  )
}

export default Featured