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
          <rect x="2" y="8" width="15" height="15" rx="4" fill="rgba(110,168,255,0.14)" {...G} fillOpacity="0.5" strokeWidth="1.3" />
          <path d="M9.5 12.5v6M6.5 15.5h6" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="23" y="6" width="11" height="8" rx="4" {...DIM} fill="none" strokeWidth="1.2" />
          <path d="M24.8 8.4l2.4 2.4 3.6-3.8" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="23" y="19" width="15" height="9" rx="4.5" {...G} fill="rgba(110,168,255,0.08)" strokeOpacity="0.7" strokeWidth="1.2" />
          <rect x="26" y="22" width="6" height="2.6" rx="1.3" fill="#6ea8ff" fillOpacity="0.55" />
          <rect x="26" y="25.5" width="9" height="2.6" rx="1.3" fill="#6ea8ff" fillOpacity="0.25" />
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
          <path d="M6 16h10M22 16h10M38 16v-8" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="6" y="11" width="10" height="10" rx="2.5" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.2" />
          <rect x="22" y="11" width="10" height="10" rx="2.5" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.2" />
          <rect x="38" y="8" width="10" height="13" rx="2.5" fill="rgba(74,222,128,0.22)" {...OK} strokeWidth="1.3" />
          <path d="M8.5 15.6l2.4 2.4 2.6-3" {...OK} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.5 15.6l2.4 2.4 2.6-3" {...OK} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42.5 12.5l2 2-2 2" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "loopring":
      return (
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="16" r="10" {...G} fill="rgba(110,168,255,0.06)" strokeOpacity="0.75" strokeWidth="1.4" />
          <path d="M24 10.5v6.5l4.2 2.3" {...G} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5 25.4a10 10 0 0 0 13.5-6.2" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="2.5 3" />
          <path d="M15.5 14.5a10 10 0 0 1 6.6-6.4" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <circle cx="9" cy="10" r="2" {...OK} fill="rgba(74,222,128,0.2)" strokeWidth="1.2" />
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
          <path d="M4 27h42" {...DIM} strokeOpacity="0.5" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="8" y="17" width="9" height="10" rx="1.5" {...DIM} fill="rgba(138,148,166,0.12)" strokeWidth="1.2" />
          <rect x="23" y="8" width="9" height="19" rx="1.5" {...G} fill="rgba(110,168,255,0.16)" strokeWidth="1.3" />
          <path d="M8 12.5l4.5-4 2.5 2 4-4.5" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="41.5" cy="14" r="2.2" {...G} fill="rgba(110,168,255,0.2)" strokeWidth="1.2" />
          <path d="M39.5 9l2 2.2-2.2 2.4" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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