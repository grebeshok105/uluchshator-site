"use client";
import { useRef } from "react";
import { asset } from "@/lib/asset";
import MiniViz, { type Viz } from "@/components/MiniViz";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  icon,
  title,
  text,
  viz,
}: {
  icon: string;
  title: string;
  text: string;
  viz: Viz;
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
      <MiniViz kind={viz} />
      <h3 className={styles.title}>
        <svg className={styles.icon} aria-hidden>
          <use href={asset(`/icons/${icon}.svg#icon`)} />
        </svg>
        {title}
      </h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}