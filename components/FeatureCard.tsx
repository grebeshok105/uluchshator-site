"use client";
import { useRef, type ReactNode } from "react";
import { asset } from "@/lib/asset";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} className={styles.card} onMouseMove={onMove}>
      <span className={styles.iconBox}>
        <svg className={styles.icon} aria-hidden>
          <use href={asset(`/icons/${icon}.svg#icon`)} />
        </svg>
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}