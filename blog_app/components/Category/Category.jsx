import Link from 'next/link';
import styles from './category.module.css';
import Image from 'next/image';

const Category = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Category</h2>
            <div className={styles.categories}>

                <Link href={`/blog`} className={`${styles.category} ${styles.style}`}>
                    <Image src='/style.png' width={32} height={32} style={{ borderRadius: '100%' , objectFit:'cover' }}   alt='image'/>
                    <span>Style</span>
                </Link>
                <Link href={`/blog`} className={   `${styles.category} ${styles.food}` }>
                    <Image src='/food.png' width={32} height={32} style={{ borderRadius: '100%' }}   alt='image'/>
                    <span>Style</span>
                </Link>
                <Link href={`/blog`} className= {`${styles.category} ${styles.coding}`}>
                    <Image src='/coding.png' width={32} height={32} style={{ borderRadius: '100%' }}  alt='image'/>
                    <span>Style</span>
                </Link>
                <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
                    <Image src='/fashion.png' width={32} height={32} style={{ borderRadius: '100%' }}  alt='image'/>
                    <span>Style</span>
                </Link>
         


            </div>
        </div>
    )
}

export default Category
