import FeatureCard from "@/components/FeatureCard";
import { type Viz } from "@/components/MiniViz";
import { asset } from "@/lib/asset";
import styles from "./Features.module.css";

const FEATURES: { icon: string; viz: Viz; title: string; text: string }[] = [
  {
    icon: "bolt",
    viz: "term",
    title: "Автономия по умолчанию",
    text: "Агент сам решает, что делать дальше: берёт контекст из баз и движется без команд.",
  },
  {
    icon: "skill",
    viz: "chips",
    title: "Скиллы под каждую задачу",
    text: "Под нетривиальную работу подключается профильный скилл: дебаг, рефакторинг, ресёрч.",
  },
  {
    icon: "db",
    viz: "stack",
    title: "Базы знаний",
    text: "Findings, RAG и Mnemopi разведены по каналам: одно событие, один канал, ноль дублей.",
  },
  {
    icon: "gate",
    viz: "gatebar",
    title: "Линт-гейт перед сдачей",
    text: "Битый frontmatter и лимиты файлов ловятся до сдачи, а не ревьюером.",
  },
  {
    icon: "loop",
    viz: "loopring",
    title: "Каждый цикл — сильнее",
    text: "Замеры «было / стало» фиксируются в базе, правила уточняются после каждого прогона.",
  },
  {
    icon: "mem",
    viz: "rows",
    title: "Память между сессиями",
    text: "Факты о владельце и проекте переживают перезапуски: агент помнит, с чем работает.",
  },
  {
    icon: "pipe",
    viz: "conveyor",
    title: "Пайплайн прокачивается сам",
    text: "Правила, скиллы и базы обновляются внутри рабочего цикла, без ручного ухода.",
  },
  {
    icon: "metric",
    viz: "bars",
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
    <section className={styles.features}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.number}>02</p>
          <div className={styles.pixRow} aria-hidden>
            <span className="pix">
              {Array.from({ length: 12 }, (_, i) => (
                <i key={i} />
              ))}
            </span>
          </div>
          <h2 className={styles.heading}>Всё уже в коробке</h2>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} viz={f.viz} title={f.title} text={f.text} />
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
                <img src={asset(s.src)} alt="" className={styles.shot} loading="lazy" />
              </div>
              <figcaption className={styles.caption}>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}