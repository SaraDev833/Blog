import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from './../../../components/Menu/Menu';
import Comments from '../../../components/comments/Comments';
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.TextContainer}>
          <h2 className={styles.head}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur quod temporibus. Quae placeat odio nemo autem!</h2>
          <div className={styles.userInfo}>
          <Image src='/p1.jpeg' className={styles.userImage} height={35} width={35} alt='userImage'/>
          <div className={styles.userName}>
            <span className={styles.name}>John Doe</span>
            <span className={styles.date}>5 December , 2024</span>
          </div>
          </div>
        </div>
        <Image className={styles.image} src='/p1.jpeg' alt='image' width={300} height={250} />
      </div>
    <div className={styles.description}>
    <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est quisquam dolorum suscipit deserunt magnam cum quibusdam qui aut pariatur!
       <br/>
       <br/>
       Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum nam quisquam ad exercitationem consequuntur aspernatur quod facilis numquam explicabo., amet consectetur adipisicing elit. Ipsum, illo!lorem7
       <br/>
       <br/>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas quisquam ab consectetur sit omnis laudantium culpa optio dolor ad qui blanditiis cum a expedita deserunt quidem illo enim consequatur praesentium! Perspiciatis totam architecto animi, odio necessitatibus repellendus officiis, dolorum non ipsa doloremque nobis voluptas suscipit inventore molestias possimus. Provident beatae voluptates, aspernatur iure earum deserunt.
          </div>


    </div>
    <div className={styles.CommentContent}>
      <div className={styles.comments}>
      <Comments/>

      </div>

          <div className={styles.menu}>
            <Menu/>
          </div>
    </div>

    </div>
  )
}

export default page
