"use client";
import Link from 'next/link';
import styles from './auth.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const AuthLinks = () => {
    const {theme} = useContext(ThemeContext);
    const NotAuthenticated = true;
    const [open, setOpen] = useState(false);

    return (
        <div>
            {NotAuthenticated ? <Link href='/login' className={styles.link}>Login</Link>
                :
                <Link href='/write' className={styles.link}>Write</Link>

            }
            <div className={styles.burger} onClick={() => setOpen(!open)} >
                <div className={styles.line} style={theme === 'dark' ? {backgroundColor:'white'} : {backgroundColor: 'black'}}></div>
                <div className={styles.lineMiddle} style={theme === 'dark' ? {backgroundColor:'white'} : {backgroundColor: 'black'}}></div>
                <div className={styles.line} style={theme === 'dark' ? {backgroundColor:'white'} : {backgroundColor: 'black'}}></div>

            </div>
      {open && (
                    <div className={styles.responsiveMenu}>
                        <Link href='/' className={styles.navLink} >Home</Link>
                        <Link href='/about' className={styles.navLink}>About</Link>
                        <Link href='/contact' className={styles.navLink}>Contact</Link>
                        {NotAuthenticated ? <Link href='/login' className={styles.resLink}>Login</Link>
                            :
                            <Link href='/write' className={styles.resLink}>Write</Link>

                        }

                    </div>
                )}
        </div>

    )
}

export default AuthLinks
