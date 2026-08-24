import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>Улучшатор. Работает сам.</p>
      <div className={styles.links}>
        <a href="https://github.com/" rel="noreferrer">
          GitHub
        </a>
        <a href="/blog">Блог</a>
        <a href="/about">О проекте</a>
      </div>
    </footer>
  );
}