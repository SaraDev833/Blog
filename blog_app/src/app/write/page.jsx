'use client';
import Image from 'next/image';
import styles from './write.module.css';
import { useState } from 'react';
import "react-quill/dist/quill.bubble.css";
const page = () => {
    const [open, setOpen] = useState(false);
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
        <ReactQuill theme="bubble" placeholder='Tell '>

        </ReactQuill>
        </div>
    )
}

export default page
