'use client'
import { signIn, useSession } from 'next-auth/react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const page = () => {
  const {data , status} = useSession();
  console.log(data , status)
  const router = useRouter();
   
  useEffect(()=>{
    if (status === 'authenticated') {
      router.push('/'); 
    } else if (status === 'unauthenticated') {
      router.push('/login'); 
    }
   
  } , [status , router])

  if(status === 'loading'){
    return (
      <div>Loading.....</div>
    )
  }
  return (
   
    <div className={styles.container}>
        <div className={styles.wrapper}>
              <div className={styles.socialLinks} onClick={()=>signIn('google')}>Sign in with Google</div>
              <div className={styles.socialLinks}>Sign in with Github</div>
              <div className={styles.socialLinks}>Sign in with Facebook</div>
              </div>
    </div>
  )
}

export default page
