import { asset } from "@/lib/asset";
import styles from "./SkillsSection.module.css";

const SKILLS = [
  {
    icon: "pipe",
    title: "Правило четырёх",
    text: "Крупная задача делится на 4 среза разведки, план-спеку на 5 блоков пишет главный, 4 воркера идут параллельно. Ревью стартует только по команде: классика, противоборство или судья.",
  },
  {
    icon: "loop",
    title: "Fable-метод",
    text: "Основной цикл работы: классифицировать запрос, назвать «готово», собрать факты из первоисточников, действовать точечно, проверить наблюдением, отчитаться результатом первым. Применяется без команды.",
  },
  {
    icon: "gate",
    title: "Fable-судья",
    text: "Любое «готово» — это набор утверждений. Судья перепроверяет заявленные проверки, диф ищет ослабленные тесты, вердикт — VERIFIED или REFUTED.",
  },
  {
    icon: "db",
    title: "Fable-домен",
    text: "Генератор скиллов под конкретный сектор: пошаговый процесс, flowchart, адаптер и тест-ловушка. Один бандл — готовый доменный рецепт.",
  },
  {
    icon: "loop",
    title: "Fable-цикл",
    text: "Автономная работа витками: каждый виток — полный цикл, следующий стартует с нового угла. Стоп по числу витков, времени или критерию готовности.",
  },
  {
    icon: "bolt",
    title: "Улучшатор",
    text: "Инспектор проекта перед агентной работой: read-only аудит, журнал фактов, предложение правок и установка только после подтверждения. Ничего, кроме локальных файлов проекта.",
  },
  {
    icon: "skill",
    title: "Nodumb",
    text: "Стоп перед первой идеей: сверка «правильная ли задача», «честный ли масштаб», «новый ли факт». Дорогие развилки проходят через варианты, а не через догадку.",
  },
  {
    icon: "term",
    title: "Frontend-диспетчер",
    text: "14 маршрутов от типа задачи к профильному скиллу: дизайн-системы, анти-слоуп-минимум, проверка живым браузером. Четвёртый бутстрап каждой сессии.",
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
              <span className={styles.iconBox}>
                <svg className={styles.icon} aria-hidden>
                  <use href={asset(`/icons/${s.icon}.svg#icon`)} />
                </svg>
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}