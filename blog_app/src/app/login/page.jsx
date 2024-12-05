import styles from './login.module.css';

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
              <div className={styles.socialLinks}>Sign in with Google</div>
              <div className={styles.socialLinks}>Sign in with Github</div>
              <div className={styles.socialLinks}>Sign in with Facebook</div>
              </div>
    </div>
  )
}

export default page
