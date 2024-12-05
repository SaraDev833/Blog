
import styles from './footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.container}>

     
        <div className={styles.blog}>
          <span>Blog Website</span>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur lorem4
             adipisicing elit. Odit odio impedit quo officiis consectetur ullam molestiae itaque, voluptates illum sapiente?</p>
          <div className={styles.socialLinks}>
            <Link href='/' className={styles.link}><Image src='/facebook.png' height={32} width={32} alt='facebook' /></Link>
            <Link href='/' className={styles.link}><Image src='/instagram.png' height={32} width={32} alt='facebook' /></Link>
            <Link href='/' className={styles.link}><Image src='/tiktok.png' height={32} width={32} alt='facebook' /></Link>
          </div>
        </div>
     
   

       <div style={{display:'flex' , flexDirection:'column' }}>
        <p style={{fontWeight:'300' , marginBottom:10}} className={styles.title}>
          Links
        </p>
       <div className={styles.linkSide}>
       
       <div className={styles.list}> 
         {/* <span className={styles.title}>Link</span> */}
  <Link className={styles.footerLink} href='/'>Home</Link>
  <Link className={styles.footerLink} href='/'>About</Link>
  <Link className={styles.footerLink} href='/'>Blog</Link>
  <Link className={styles.footerLink} href='/'>Contact</Link>
       </div>
       <div className={styles.list}> 
         {/* <span className={styles.title}>Tags</span> */}
  <Link className={styles.footerLink} href='/'>Style</Link>
  <Link className={styles.footerLink} href='/'>Fashion</Link>
  <Link className={styles.footerLink} href='/'>Coding</Link>
  <Link className={styles.footerLink} href='/'>Food</Link>
       </div>
       <div className={styles.list}> 
         {/* <span className={styles.title}>Link</span> */}
  <Link className={styles.footerLink} href='/'>Facebook</Link>
  <Link className={styles.footerLink} href='/'>Instagram</Link>
  <Link className={styles.footerLink} href='/'>Tiktok</Link>
       </div>
     </div>
       </div>
   
    </div>
  );
}

export default Footer;
