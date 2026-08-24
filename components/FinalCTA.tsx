import { asset } from "@/lib/asset";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>Улучшатор. Работает сам.</h2>
      <a href={asset("/downloads/omp-setup-1.0.zip")} download className={`btn ${styles.button}`}>
        <span>Установить</span>
      </a>
      <p className={styles.note}>npm / curl / brew — как удобно</p>
    </section>
  );
}