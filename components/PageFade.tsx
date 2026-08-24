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
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = setTimeout(() => setVisible(false), 1450);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      key={run}
      className={`${styles.overlay} ${visible ? styles.show : styles.hide}`}
      aria-hidden
    >
      <span className={styles.word}>Улучшатор</span>
      <span className="cursor" />
      <span className={styles.note}>~ загружаю</span>
    </div>
  );
}