import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/snrub.svg" alt="Mr. Snrub" className={styles.logo} /> Made in Karlsruhe, Germany
      </footer>
    </>
  )
}
