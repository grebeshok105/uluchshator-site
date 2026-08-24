import styles from "./Manifest.module.css";

export default function Manifest() {
  return (
    <section className={styles.manifest}>
      <p className={styles.number}>01</p>
      <h2 className={styles.title}>Улучшатор улучшает даже сам себя</h2>
      <div className={styles.body}>
        <p>
          Обвязка вокруг omp: скиллы, базы знаний, линт-гейты и пайплайн,
          которые усиливают агента во всех аспектах. Каждое изменение
          попадает в каналы памяти, каждый прогон проверяется гейтом.
        </p>
        <p>
          Агент сам пишет changelog, сам чинит свои правила и сам же по ним
          работает. Усиление не разовое: оно происходит каждый цикл.
        </p>
      </div>
    </section>
  );
}