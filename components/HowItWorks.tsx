import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "01",
    title: "Ставишь",
    text: "curl -fsSL https://omp.sh/install — три команды, и улучшатор уже поверх omp.",
  },
  {
    n: "02",
    title: "Агент работает",
    text: "Каждая задача проходит через скиллы, базы и гейты. Улучшения попадают в журнал сами.",
  },
  {
    n: "03",
    title: "Система растёт",
    text: "Правила уточняются по замерам, контент публикуется коммитом. Пайплайн усиливается каждый цикл.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className={styles.howInner}>
        <p className={styles.number}>03</p>
        <h2 className={styles.heading}>Запустил. Улучшилось.</h2>
        <div className={styles.steps}>
          {STEPS.map((s) => (
            <div key={s.n} className={styles.step}>
              <span className={styles.stepN}>{s.n}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}