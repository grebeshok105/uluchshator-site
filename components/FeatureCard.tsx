"use client";
import { useRef } from "react";
import { asset } from "@/lib/asset";
import styles from "./FeatureCard.module.css";

export type Viz = "term" | "chips" | "stack" | "gatebar" | "loopring" | "rows" | "conveyor" | "bars";

const G = { stroke: "#6ea8ff" };
const OK = { stroke: "#4ade80" };
const DIM = { stroke: "#8a94a6" };

function MiniViz({ kind }: { kind: Viz }) {
  switch (kind) {
    case "term":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="6" width="44" height="24" rx="5" stroke="#6ea8ff" fill="none" strokeOpacity="0.5" strokeWidth="1.3" />
          <path d="M7 12h12M7 16h7" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M27 17h3" {...G} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M7 24h10" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "chips":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="10" width="13" height="13" rx="3" {...G} fill="none" strokeWidth="1.3" />
          <path d="M6.5 14.5v4M8.5 16.5h-4" {...G} strokeWidth="1.1" fill="none" strokeLinecap="round" />
          <rect x="21" y="7" width="12" height="9" rx="2" {...DIM} fill="none" strokeWidth="1.2" />
          <rect x="21" y="20" width="17" height="6" rx="2" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M13 8c0-1.7 4.9-3 11-3s11 1.3 11 3" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 8v7.5c0 1.7 4.9 3 11 3s11-1.3 11-3V8" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 12.3c0 1.7 4.9 3 11 3s11-1.3 11-3" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <circle cx="9.5" cy="16" r="2.4" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      );
    case "gatebar":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M5 22h30" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeDasharray="2 3" />
          <rect x="2" y="12" width="36" height="5" rx="2.5" {...G} fill="none" strokeOpacity="0.5" strokeWidth="1.3" />
          <path d="M2 14.5h36" {...G} fill="none" strokeOpacity="0.25" strokeWidth="1" />
          <circle cx="38" cy="14.5" r="3" fill="#4ade80" fillOpacity="0.9" />
          <path d="M6 13h8M10 13v-5" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "loopring":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="16" r="9.5" {...G} fill="none" strokeWidth="1.4" />
          <path d="M24 11.5v6.5l4 2" {...G} fill="none" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M16.5 24.5a9.5 9.5 0 1 0 9-12.7" {...G} fill="none" strokeOpacity="0.55" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "rows":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="3" y="7" width="26" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <rect x="3" y="14.5" width="34" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.45" strokeWidth="1.2" />
          <rect x="3" y="22" width="20" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="40" cy="24" r="2" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      );
    case "conveyor":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeWidth="1.2" />
          <rect x="19.5" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.55" strokeWidth="1.2" />
          <rect x="37" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <path d="M11.5 16h7.5M29 16h7.5" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M17 10.5l3 5.5-3 5.5" {...G} fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M4 26h42" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="9" y="16" width="9" height="10" rx="1.5" {...DIM} fill="none" strokeWidth="1.2" />
          <rect x="24" y="8" width="9" height="18" rx="1.5" {...G} fill="none" strokeWidth="1.2" />
          <path d="M33 12h7M33 16h4" {...OK} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      );
  }
}

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