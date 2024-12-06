"use client";
import Link from 'next/link';
import styles from './auth.module.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
    const {data , status} = useSession()
    const { theme } = useContext(ThemeContext);
    
    const [open, setOpen] = useState(false);

    return (
        <div style={{ display: 'flex', gap: 10 }}>
            {status === 'unauthenticated' ?
                <Link href='/login' className={styles.link} >Login</Link>

                :

                <>
                    <Link href='/write' className={styles.link} >Write</Link>
                    <p style={{cursor:'pointer'}}  className={styles.link} onClick={() => signOut("google")}>Logout</p>
                </>

            }
            <div className={styles.burger} onClick={() => setOpen(!open)} >
                <div className={styles.line} style={theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}></div>
                <div className={styles.lineMiddle} style={theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}></div>
                <div className={styles.line} style={theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}></div>

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
