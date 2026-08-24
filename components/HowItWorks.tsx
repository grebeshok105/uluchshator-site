import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "01",
    title: "Ставишь",
    text: "Три команды, и улучшатор уже поверх omp — скиллы, базы и гейты на месте.",
    cmd: "$ curl -fsSL https://omp.sh/install | sh",
  },
  {
    n: "02",
    title: "Агент работает",
    text: "Каждая задача проходит через маршрутизатор поиска, скиллы и гейты. Улучшения попадают в журнал сами.",
    cmd: "~ читает базы / правит / проверяет",
  },
  {
    n: "03",
    title: "Система растёт",
    text: "Правила уточняются по замерам, контент публикуется коммитом. Пайплайн усиливается каждый цикл.",
    cmd: "$ git push",
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
              <code className={styles.cmd}>{s.cmd}</code>
            </div>
          ))}
        </div>
        <div className={styles.tail} aria-hidden>
          <span className="cursor" />
          <span className={styles.tailText}>~ улучшает себя. каждый цикл.</span>
        </div>
      </div>
    </section>
  );
}