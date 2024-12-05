import CardList from '../../components/CardList/CardList';
import Category from '../../components/Category/Category';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/footer/Footer';
import Menu from '../../components/Menu/Menu';
import styles from './homepage.module.css'


export default function Home() {
  return (
    <div>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>

    </div>
  );
}
