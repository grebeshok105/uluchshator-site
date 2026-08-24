import { SITE } from "@/data/site";
import styles from "./Stats.module.css";

const ITEMS = [
  { value: String(SITE.skillCount), label: "скиллов" },
  { value: String(SITE.docCount), label: "канон-доков" },
  { value: String(SITE.searchDomains), label: "доменов поиска" },
  { value: String(SITE.gates), label: "гейта на сдаче" },
  { value: String(SITE.providers), label: "провайдера моделей" },
  { value: String(SITE.models), label: "моделей в роутинге" },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.inner}>
        <p className={styles.number}>04</p>
        <h2 className={styles.heading}>Сейчас</h2>
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
              ok: {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}