export type Viz = "term" | "chips" | "stack" | "gatebar" | "loopring" | "rows" | "conveyor" | "bars" | "r4" | "fmethod" | "fjudge" | "fdomain" | "floop" | "upgrade" | "nodumb" | "frontend";

import styles from "./MiniViz.module.css";

const G = { stroke: "#6ea8ff" };
const OK = { stroke: "#4ade80" };
const DIM = { stroke: "#8a94a6" };

export default function MiniViz({ kind }: { kind: Viz }) {
  switch (kind) {
    case "term":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="6" width="44" height="24" rx="5" stroke="#6ea8ff" fill="none" strokeOpacity="0.5" strokeWidth="1.3" />
          <path d="M7 12h12M7 16h7" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M27 17h3" {...G} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M7 24h10" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    );
    case "chips":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="8" width="15" height="15" rx="4" fill="rgba(110,168,255,0.14)" {...G} fillOpacity="0.5" strokeWidth="1.3" />
          <path d="M9.5 12.5v6M6.5 15.5h6" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="23" y="6" width="11" height="8" rx="4" {...DIM} fill="none" strokeWidth="1.2" />
          <path d="M24.8 8.4l2.4 2.4 3.6-3.8" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="23" y="19" width="15" height="9" rx="4.5" {...G} fill="rgba(110,168,255,0.08)" strokeOpacity="0.7" strokeWidth="1.2" />
          <rect x="26" y="22" width="6" height="2.6" rx="1.3" fill="#6ea8ff" fillOpacity="0.55" />
          <rect x="26" y="25.5" width="9" height="2.6" rx="1.3" fill="#6ea8ff" fillOpacity="0.25" />
        </svg>
      </span>
    );
    case "stack":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M13 8c0-1.7 4.9-3 11-3s11 1.3 11 3" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 8v7.5c0 1.7 4.9 3 11 3s11-1.3 11-3V8" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 12.3c0 1.7 4.9 3 11 3s11-1.3 11-3" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <circle cx="9.5" cy="16" r="2.4" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      </span>
    );
    case "gatebar":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M6 8.2l9-3.5 9 3.5v6.4c0 4.6-3.4 8.3-9 9.6-5.6-1.3-9-5-9-9.6z" {...G} fill="rgba(110,168,255,0.1)" strokeOpacity="0.7" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M10.5 15.4l2 2 3.4-3.6" {...OK} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 12.5v3.5h3.5" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.8 13.6a7 7 0 1 1-1.8-5.6" {...G} strokeOpacity="0.5" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="36.5" cy="13" r="2.4" fill="#4ade80" fillOpacity="0.85" />
        </svg>
      </span>
    );
    case "loopring":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="16" r="10" {...G} fill="rgba(110,168,255,0.06)" strokeOpacity="0.75" strokeWidth="1.4" />
          <path d="M24 10.5v6.5l4.2 2.3" {...G} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5 25.4a10 10 0 0 0 13.5-6.2" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="2.5 3" />
          <path d="M15.5 14.5a10 10 0 0 1 6.6-6.4" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <circle cx="9" cy="10" r="2" {...OK} fill="rgba(74,222,128,0.2)" strokeWidth="1.2" />
        </svg>
      </span>
    );
    case "rows":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="3" y="7" width="26" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <rect x="3" y="14.5" width="34" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.45" strokeWidth="1.2" />
          <rect x="3" y="22" width="20" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="40" cy="24" r="2" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      </span>
    );
    case "conveyor":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="2" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeWidth="1.2" />
          <rect x="19.5" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.55" strokeWidth="1.2" />
          <rect x="37" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <path d="M11.5 16h7.5M29 16h7.5" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M17 10.5l3 5.5-3 5.5" {...G} fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
    case "bars":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M4 27h42" {...DIM} strokeOpacity="0.5" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="8" y="17" width="9" height="10" rx="1.5" {...DIM} fill="rgba(138,148,166,0.12)" strokeWidth="1.2" />
          <rect x="23" y="8" width="9" height="19" rx="1.5" {...G} fill="rgba(110,168,255,0.16)" strokeWidth="1.3" />
          <path d="M8 12.5l4.5-4 2.5 2 4-4.5" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="41.5" cy="14" r="2.2" {...G} fill="rgba(110,168,255,0.2)" strokeWidth="1.2" />
          <path d="M39.5 9l2 2.2-2.2 2.4" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
    case "r4":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="6" y="7" width="12" height="12" rx="2.5" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.3" />
          <rect x="34" y="7" width="12" height="12" rx="2.5" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.3" />
          <rect x="6" y="21" width="12" height="12" rx="2.5" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.3" />
          <rect x="34" y="21" width="12" height="12" rx="2.5" fill="rgba(74,222,128,0.2)" {...OK} strokeWidth="1.4" />
          <path d="M15 13h14" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M29 10l4 3-4 3" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
    case "fmethod":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="16" r="9.5" {...G} fill="rgba(110,168,255,0.06)" strokeWidth="1.3" />
          <circle cx="24" cy="6.5" r="1.7" {...OK} fill="rgba(74,222,128,0.25)" strokeWidth="1.1" />
          <circle cx="33.5" cy="16" r="1.4" {...DIM} strokeWidth="1" />
          <circle cx="24" cy="25.5" r="1.4" {...DIM} strokeWidth="1" />
          <circle cx="14.5" cy="16" r="1.4" {...DIM} strokeWidth="1" />
          <path d="M24 8.5v7l5 2.8" {...G} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
    case "fjudge":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <path d="M24 8v16" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M11 11h26" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M11 11C6.5 13.5 5.5 17 5.5 20.5H16c0-3.5-1-7-5-9.5z" {...DIM} fill="rgba(138,148,166,0.1)" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M37 11c-4.5 2.5-5.5 6-5.5 9.5H42.5C42.5 17 41.5 13.5 37 11z" {...G} fill="rgba(110,168,255,0.1)" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M24 24l-6 4.5h12z" {...OK} fill="rgba(74,222,128,0.2)" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </span>
    );
    case "fdomain":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="15.5" r="10" {...G} fill="rgba(110,168,255,0.06)" strokeWidth="1.3" />
          <ellipse cx="24" cy="15.5" rx="4.2" ry="10" {...G} strokeOpacity="0.6" strokeWidth="1.2" />
          <path d="M14 15.5h20" {...G} strokeOpacity="0.6" strokeWidth="1.2" fill="none" />
          <path d="M38 26a6.5 6.5 0 0 0 2-3.5" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <circle cx="41" cy="19.5" r="1.6" {...OK} fill="rgba(74,222,128,0.25)" strokeWidth="1.1" />
        </svg>
      </span>
    );
    case "floop":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="24" cy="16" r="9.5" {...G} fill="none" strokeOpacity="0.55" strokeWidth="1.3" />
          <circle cx="24" cy="16" r="5.5" {...G} fill="rgba(110,168,255,0.07)" strokeWidth="1.2" />
          <path d="M30 8a9.5 9.5 0 0 1 4.5 12" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M34.5 19.8V23h-3.2" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="16" r="1.5" {...OK} fill="rgba(74,222,128,0.3)" strokeWidth="1" />
        </svg>
      </span>
    );
    case "upgrade":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <circle cx="22" cy="16" r="7" {...G} fill="rgba(110,168,255,0.08)" strokeWidth="1.3" />
          {[0,45,90,135,180,225,270,315].map((a) => (
            <path key={a} d={'M' + (22 + 7*Math.cos(a*Math.PI/180)).toFixed(1) + ' ' + (16 + 7*Math.sin(a*Math.PI/180)).toFixed(1) + 'l' + (3.4*Math.cos(a*Math.PI/180)).toFixed(1) + ' ' + (3.4*Math.sin(a*Math.PI/180)).toFixed(1)} {...G} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          ))}
          <circle cx="22" cy="16" r="2" {...OK} fill="rgba(74,222,128,0.3)" strokeWidth="1" />
          <path d="M35 6l3.5 3.5L35 13" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38.5 9.5H33" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    );
    case "nodumb":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="19" y="5" width="10" height="23" rx="4.5" {...G} fill="rgba(110,168,255,0.07)" strokeWidth="1.3" />
          <circle cx="24" cy="10.5" r="2.7" fill="rgba(110,168,255,0.5)" strokeWidth="1.2" {...G} fillOpacity="0.5" />
          <circle cx="24" cy="16" r="2.7" {...DIM} strokeWidth="1.2" fill="none" />
          <circle cx="24" cy="21.5" r="2.7" {...OK} fill="rgba(74,222,128,0.25)" strokeWidth="1.2" fillOpacity="0.4" />
        </svg>
      </span>
    );
    case "frontend":
      return (
        <span className={styles.screen}>
        <svg viewBox="0 0 48 32" className={styles.viz} aria-hidden>
          <rect x="4" y="6" width="40" height="21" rx="4" {...G} fill="rgba(110,168,255,0.06)" strokeWidth="1.3" />
          <rect x="8.5" y="10.5" width="31" height="12" rx="2" {...DIM} fill="none" strokeOpacity="0.7" strokeWidth="1.1" />
          <path d="M12 14.5h9M12 18h15" {...G} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M28 18l3-2.5 3 2.5" {...OK} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 27v3.5h8V27" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
}