import { SITE } from "@/data/site";
import styles from "./Hero.module.css";

const TERM_LINES = [
  "$ omp up",
  "✓ скиллы: 56 валидны",
  "✓ базы: 4 свежие",
  "✓ линт-гейт: пройден",
  "~ агент продолжает работу",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.status}>
          <span className={styles.online} aria-hidden />
          online · {SITE.skillCount} скиллов активны
        </p>
        <h1 className={styles.title}>Улучшатор</h1>
        <p className={styles.slogan}>Пайплайн, который прокачивается сам</p>
        <div className={styles.actions}>
          <a href="https://github.com/" className={styles.primary}>
            Установить
          </a>
          <a href="/changelog" className={styles.secondary}>
            Смотреть изменения
          </a>
        </div>
      </div>
      <div className={styles.term} aria-hidden>
        {TERM_LINES.map((line, i) => (
          <p key={i} className={styles.termLine} style={{ animationDelay: `${i * 0.35}s` }}>
            {line}
          </p>
        ))}
        <span className="cursor" />
      </div>
    </section>
  );
}