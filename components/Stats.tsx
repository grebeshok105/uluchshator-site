import { SITE } from "@/data/site";
import styles from "./Stats.module.css";

const ITEMS = [
  { value: String(SITE.skillCount), label: "скиллов" },
  { value: String(SITE.baseCount), label: "базы знаний" },
  { value: `${SITE.metricCount}+`, label: "замеров было → стало" },
  { value: "1", label: "агент доволен" },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Сейчас</h2>
        <p className={styles.line}>Запустил. Улучшилось.</p>
      </div>
      <dl className={styles.grid}>
        {ITEMS.map((i) => (
          <div key={i.label} className={styles.cell}>
            <dt className={styles.value}>{i.value}</dt>
            <dd className={styles.label}>{i.label}</dd>
          </div>
        ))}
      </dl>
      <ul className={styles.statuses}>
        {SITE.statuses.map((s) => (
          <li key={s} className={styles.statusOk}>
            ✓ {s}
          </li>
        ))}
      </ul>
    </section>
  );
}