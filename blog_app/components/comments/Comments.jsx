import Image from 'next/image';
import styles from './comments.module.css';

const Comments = () => {
  return (
    <div className={styles.CommentSection}>
      <h2 className={styles.head}>Comments</h2>
       <div className={styles.commentArea}>
        <textarea placeholder='write your comment' className={styles.commentBox}></textarea>
        <div>
        <button className={styles.button}>Add</button>
        </div>
    
       </div>
       <div className={styles.comments}>
        <div className={styles.commentFlex}>
       <div className={styles.comment}>
         <Image className={styles.image} src='/p1.jpeg' height={35} width={35} alt='image'/>
         <div className={styles.TextContainer}>
               <span className={styles.name}>Sara Sheikh</span>
               <span className={styles.date}>01.12.2024</span>
   
         </div>
   
         
 </div>
 <div className={styles.post}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus provident, labore quos necessitatibus qui porro quasi, voluptate deserunt eveniet odit architecto enim! Animi suscipit nam iusto. Accusantium culpa eum, voluptates consectetur odit fugiat suscipit quasi, ea nobis, perferendis voluptatum.
      </div>
 </div>
        <div className={styles.commentFlex}>
       <div className={styles.comment}>
         <Image className={styles.image} src='/p1.jpeg' height={35} width={35} alt='image'/>
         <div className={styles.TextContainer}>
               <span className={styles.name}>Sara Sheikh</span>
               <span className={styles.date}>01.12.2024</span>
   
         </div>
   
         
 </div>
 <div className={styles.post}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus provident, labore quos necessitatibus qui porro quasi, voluptate deserunt eveniet odit architecto enim! Animi suscipit nam iusto. Accusantium culpa eum, voluptates consectetur odit fugiat suscipit quasi, ea nobis, perferendis voluptatum.
      </div>
 </div>
        <div className={styles.commentFlex}>
       <div className={styles.comment}>
         <Image className={styles.image} src='/p1.jpeg' height={35} width={35} alt='image'/>
         <div className={styles.TextContainer}>
               <span className={styles.name}>Sara Sheikh</span>
               <span className={styles.date}>01.12.2024</span>
   
         </div>
   
         
 </div>
 <div className={styles.post}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus provident, labore quos necessitatibus qui porro quasi, voluptate deserunt eveniet odit architecto enim! Animi suscipit nam iusto. Accusantium culpa eum, voluptates consectetur odit fugiat suscipit quasi, ea nobis, perferendis voluptatum.
      </div>
 </div>
        <div className={styles.commentFlex}>
       <div className={styles.comment}>
         <Image className={styles.image} src='/p1.jpeg' height={35} width={35} alt='image'/>
         <div className={styles.TextContainer}>
               <span className={styles.name}>Sara Sheikh</span>
               <span className={styles.date}>01.12.2024</span>
   
         </div>
   
         
 </div>
 <div className={styles.post}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus provident, labore quos necessitatibus qui porro quasi, voluptate deserunt eveniet odit architecto enim! Animi suscipit nam iusto. Accusantium culpa eum, voluptates consectetur odit fugiat suscipit quasi, ea nobis, perferendis voluptatum.
      </div>
 </div>
        <div className={styles.commentFlex}>
       <div className={styles.comment}>
         <Image className={styles.image} src='/p1.jpeg' height={35} width={35} alt='image'/>
         <div className={styles.TextContainer}>
               <span className={styles.name}>Sara Sheikh</span>
               <span className={styles.date}>01.12.2024</span>
   
         </div>
   
         
 </div>
 <div className={styles.post}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus provident, labore quos necessitatibus qui porro quasi, voluptate deserunt eveniet odit architecto enim! Animi suscipit nam iusto. Accusantium culpa eum, voluptates consectetur odit fugiat suscipit quasi, ea nobis, perferendis voluptatum.
      </div>
 </div>
     
       </div>
    </div>
  )
}

export default Comments
