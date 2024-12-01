"use client";
import { useContext } from 'react';
import styles from './theme.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image';

const ThemeToggle = () => {
    const {theme , toggle} = useContext(ThemeContext);
  return (
    <div className={styles.container}
    onClick={toggle}
    style={theme === 'dark' ? {background: 'gray' , left: '1px'} : {background: 'black' , right: '1px'}}
    >
      <div className={styles.ball} onClick={toggle}
        style={theme === 'dark' ? {background: 'black' , right: '1px'} : {background: 'white' , left: '1px'}}
      >
     {console.log(theme)}
      </div>
      <Image src = "/moon.png" alt= 'moon' width={14} height={14}/>
      <Image src = "/sun.png" alt= 'moon' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
