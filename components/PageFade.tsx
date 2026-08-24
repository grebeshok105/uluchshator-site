"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageFade.module.css";

export default function PageFade() {
  const pathname = usePathname();
  const first = useRef(true);
  const [visible, setVisible] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setRun((r) => r + 1);
    setVisible(true);
    window.dispatchEvent(new CustomEvent("lenis-reset"));
    const t = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      key={run}
      className={`${styles.overlay} ${visible ? styles.show : styles.hide}`}
      aria-hidden
    >
      <svg className={styles.spinner} viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r="20" stroke="rgba(110,168,255,0.16)" strokeWidth="3" fill="none" />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="var(--glow-b)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="88 38"
          strokeDashoffset="10"
        />
      </svg>
      <span className={styles.word}>Улучшатор</span>
      <span className={styles.note}>~ загружаю</span>
    </div>
  );
}