import MiniViz, { type Viz } from "@/components/MiniViz";
import styles from "./SkillsSection.module.css";

const SKILLS: { viz: Viz; title: string; lead: string; points: string[] }[] = [
  {
    viz: "term",
    title: "Правило четырёх",
    lead: "Пайплайн для задач, которые тянут на план из пяти блоков.",
    points: [
      "4 разведчика: архитектура, паттерны, риски, приёмка",
      "план-спека на 5 блоков с контрактами до диспатча",
      "4 воркера параллельно, ревью только по команде",
    ],
  },
  {
    viz: "chips",
    title: "Fable-метод",
    lead: "Основной цикл любой нетривиальной работы.",
    points: [
      "классифицировать запрос и назвать «готово»",
      "факты из первоисточников, не из памяти",
      "проверка наблюдением, отчёт результатом первым",
    ],
  },
  {
    viz: "stack",
    title: "Fable-судья",
    lead: "Адверсариальная проверка любого «готово».",
    points: [
      "диф того, что реально изменилось",
      "перепрогон заявленных проверок",
      "вердикт VERIFIED или REFUTED",
    ],
  },
  {
    viz: "gatebar",
    title: "Fable-домен",
    lead: "Генератор скиллов под конкретный сектор.",
    points: [
      "пошаговый процесс и flowchart",
      "адаптер: что считать фактом и проверкой",
      "тест-ловушка на типовые ошибки",
    ],
  },
  {
    viz: "loopring",
    title: "Fable-цикл",
    lead: "Автономная работа витками без постоянного надзора.",
    points: [
      "виток — полный цикл от фактов до отчёта",
      "каждый следующий стартует с нового угла",
      "стоп по числу витков, времени или критерию",
    ],
  },
  {
    viz: "rows",
    title: "Улучшатор",
    lead: "Инспектор проекта перед агентной работой.",
    points: [
      "read-only аудит и журнал фактов",
      "предложение правок до их установки",
      "только локальные файлы проекта",
    ],
  },
  {
    viz: "conveyor",
    title: "Nodumb",
    lead: "Стоп перед первой пришедшей в голову идеей.",
    points: [
      "сверка: правильная задача, честный масштаб",
      "варианты с разных осей до дорогих развилок",
      "решение из фактов, а не из первой мысли",
    ],
  },
  {
    viz: "bars",
    title: "Frontend-диспетчер",
    lead: "Маршрутизация фронт-задач по профильным скиллам.",
    points: [
      "14 маршрутов от типа задачи к скиллу",
      "анти-слоуп-минимум до первой вёрстки",
      "проверка живым браузером, не картинкой",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <div className={styles.inner}>
        <p className={styles.number}>05</p>
        <h2 className={styles.heading}>Скиллы в бою</h2>
        <div className={styles.grid}>
          {SKILLS.map((s) => (
            <div key={s.title} className={styles.card}>
              <MiniViz kind={s.viz} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.lead}>{s.lead}</p>
              <ul className={styles.points}>
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}