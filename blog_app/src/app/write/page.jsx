'use client';
import Image from 'next/image';
import styles from './write.module.css';
import { useState } from 'react';


const page = () => {
    const [open, setOpen] = useState(false);
    const [value , setValue] = useState('');
    return (
        <div className={styles.container}>
            <input type='text' className={styles.title} placeholder='Title' />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' height={16} width={16} alt='button' />
                </button>
                {open && (
                    <div className={styles.edit}>
                        <button className={styles.addButton}>
                            <Image src='/image.png' height={16} width={16} alt='button' />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/external.png' height={16} width={16} alt='button' />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/video.png' height={16} width={16} alt='button' />
                        </button>

                    </div>
                )}
            </div>
           <textarea className={styles.area} placeholder='Tell us your story...' ></textarea>
           <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quidem repellendus ratione quam quae, tempora incidunt quas debitis repudiandae saepe expedita. Culpa error vero quidem distinctio officiis aut labore, expedita, provident, aspernatur rem sequi temporibus adipisci sed iste vel et. Dolorum necessitatibus cumque distinctio. Amet laudantium atque veritatis beatae explicabo.
           </div>
        </div>
    )
}

export default page
