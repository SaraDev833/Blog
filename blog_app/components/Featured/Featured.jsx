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
        
          <Image src='/p1.jpeg' width={350} height={200} alt='post' className={styles.image}/>
      
         <div className={styles.textContainer}>
        <h2 className={styles.headline}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus, odio dignissimos consequuntur natus architecto veritatis aperiam aut alias mollitia!</p>
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
