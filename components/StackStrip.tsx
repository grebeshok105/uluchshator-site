import styles from "./StackStrip.module.css";

const ITEMS = [
  { label: "omp", detail: "основа" },
  { label: "mcp", detail: "серверы" },
  { label: "skills", detail: "агентные" },
  { label: "60+ провайдеров", detail: "подключены" },
];

export default function StackStrip() {
  return (
    <section className={styles.strip} aria-label="Стек, поверх которого работает улучшатор">
      <p className={styles.caption}>работает поверх</p>
      <div className={styles.items}>
        {ITEMS.map((i) => (
          <div key={i.label} className={styles.item}>
            <span className={styles.label}>{i.label}</span>
            <span className={styles.detail}>{i.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}