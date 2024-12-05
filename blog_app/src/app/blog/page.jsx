
import CardList from '../../../components/CardList/CardList';
import Menu from '../../../components/Menu/Menu';
import styles from './blog.module.css';

const page = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Style Blog</h3>
      <div className={styles.content}>
             <CardList/>
             <Menu/>
      </div>
    </div>
  )
}

export default page
