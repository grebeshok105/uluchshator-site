import { SITE } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.status}>
          <span className={styles.online} aria-hidden />
          online / {SITE.skillCount} скиллов активны
        </p>
        <h1 className={styles.title}>Улучшатор</h1>
        <p className={styles.slogan}>Пайплайн, который прокачивается сам</p>
        <div className={styles.actions}>
          <a href="https://github.com/" className={`btn ${styles.primary}`}>
            <span>Установить</span>
          </a>
          <a href="/changelog" className={`btn ${styles.secondary}`}>
            <span>Смотреть изменения</span>
          </a>
        </div>
        <p className={styles.reassurance}>три команды в терминале / бесплатно</p>
      </div>
      <div className={styles.stage}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <span className={styles.windowTitle}>omp — live session</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/shots/python.webp" alt="omp выполняет Python-код и рисует график в живом терминале" className={styles.shot} />
        </div>
      </div>
    </section>
  );
}