export type Viz = "term" | "chips" | "stack" | "gatebar" | "loopring" | "rows" | "conveyor" | "bars";

const G = { stroke: "#6ea8ff" };
const OK = { stroke: "#4ade80" };
const DIM = { stroke: "#8a94a6" };

export default function MiniViz({ kind }: { kind: Viz }) {
  switch (kind) {
    case "term":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
          <rect x="2" y="6" width="44" height="24" rx="5" stroke="#6ea8ff" fill="none" strokeOpacity="0.5" strokeWidth="1.3" />
          <path d="M7 12h12M7 16h7" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M27 17h3" {...G} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M7 24h10" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "chips":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
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
        <svg viewBox="0 0 48 32" aria-hidden>
          <path d="M13 8c0-1.7 4.9-3 11-3s11 1.3 11 3" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 8v7.5c0 1.7 4.9 3 11 3s11-1.3 11-3V8" {...G} fill="none" strokeWidth="1.2" />
          <path d="M13 12.3c0 1.7 4.9 3 11 3s11-1.3 11-3" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <circle cx="9.5" cy="16" r="2.4" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      );
    case "gatebar":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
          <path d="M6 8.2l9-3.5 9 3.5v6.4c0 4.6-3.4 8.3-9 9.6-5.6-1.3-9-5-9-9.6z" {...G} fill="rgba(110,168,255,0.1)" strokeOpacity="0.7" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M10.5 15.4l2 2 3.4-3.6" {...OK} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 12.5v3.5h3.5" {...G} strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.8 13.6a7 7 0 1 1-1.8-5.6" {...G} strokeOpacity="0.5" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <circle cx="36.5" cy="13" r="2.4" fill="#4ade80" fillOpacity="0.85" />
        </svg>
      );
    case "loopring":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
          <circle cx="24" cy="16" r="10" {...G} fill="rgba(110,168,255,0.06)" strokeOpacity="0.75" strokeWidth="1.4" />
          <path d="M24 10.5v6.5l4.2 2.3" {...G} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.5 25.4a10 10 0 0 0 13.5-6.2" {...DIM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeDasharray="2.5 3" />
          <path d="M15.5 14.5a10 10 0 0 1 6.6-6.4" {...OK} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <circle cx="9" cy="10" r="2" {...OK} fill="rgba(74,222,128,0.2)" strokeWidth="1.2" />
        </svg>
      );
    case "rows":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
          <rect x="3" y="7" width="26" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.6" strokeWidth="1.2" />
          <rect x="3" y="14.5" width="34" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.45" strokeWidth="1.2" />
          <rect x="3" y="22" width="20" height="4.5" rx="2.2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="40" cy="24" r="2" {...OK} fill="none" strokeWidth="1.2" />
        </svg>
      );
    case "conveyor":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
          <rect x="2" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeWidth="1.2" />
          <rect x="19.5" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.55" strokeWidth="1.2" />
          <rect x="37" y="13" width="9" height="9" rx="2" {...G} fill="none" strokeOpacity="0.3" strokeWidth="1.2" />
          <path d="M11.5 16h7.5M29 16h7.5" {...DIM} strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M17 10.5l3 5.5-3 5.5" {...G} fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 48 32" aria-hidden>
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