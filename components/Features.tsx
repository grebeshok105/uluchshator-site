import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: "bolt",
    title: "Автономия по умолчанию",
    text: "Агент сам решает, что делать дальше: берёт контекст из баз и движется без команд.",
  },
  {
    icon: "skill",
    title: "Скиллы под каждую задачу",
    text: "Под нетривиальную работу подключается профильный скилл: дебаг, рефакторинг, ресёрч.",
  },
  {
    icon: "db",
    title: "Базы знаний",
    text: "Findings, RAG и Mnemopi разведены по каналам: одно событие, один канал, ноль дублей.",
  },
  {
    icon: "gate",
    title: "Линт-гейт перед сдачей",
    text: "Битый frontmatter и лимиты файлов ловятся до сдачи, а не ревьюером.",
  },
  {
    icon: "loop",
    title: "Каждый цикл — сильнее",
    text: "Замеры «было / стало» фиксируются в базе, правила уточняются после каждого прогона.",
  },
  {
    icon: "mem",
    title: "Память между сессиями",
    text: "Факты о владельце и проекте переживают перезапуски: агент помнит, с чем работает.",
  },
  {
    icon: "pipe",
    title: "Пайплайн прокачивается сам",
    text: "Правила, скиллы и базы обновляются внутри рабочего цикла, без ручного ухода.",
  },
  {
    icon: "metric",
    title: "Улучшение в цифрах",
    text: "Любое «стало лучше» — только с замером: было X, стало Y, дельта в базе.",
  },
];

const SHOTS = [
  {
    src: "/shots/lspv.webp",
    title: "lsp — live",
    caption: "LSP встроен в каждую правку: rename проходит через workspace, переэкспорты обновляются до сдвига файла.",
  },
  {
    src: "/shots/ask.webp",
    title: "ask — live",
    caption: "Развилка — не догадка: агент задаёт структурированный вопрос и продолжает по ответу.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <p className={styles.number}>02</p>
      <h2 className={styles.heading}>Всё уже в коробке</h2>
      <div className={styles.grid}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.card}>
            <svg className={styles.icon} aria-hidden>
              <use href={`/icons/${f.icon}.svg#icon`} />
            </svg>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.shots}>
        {SHOTS.map((s) => (
          <figure key={s.title} className={styles.figure}>
            <div className={styles.window}>
              <div className={styles.windowBar}>
                <span className={styles.windowTitle}>{s.title}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt="" className={styles.shot} loading="lazy" />
            </div>
            <figcaption className={styles.caption}>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}