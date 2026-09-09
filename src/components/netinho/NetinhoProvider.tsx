import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type NetinhoContextValue = {
  say: (id: string, message: string) => void;
};

const NetinhoContext = createContext<NetinhoContextValue | null>(null);

export function useNetinho() {
  const ctx = useContext(NetinhoContext);
  return (
    ctx ?? {
      say: () => {},
    }
  );
}

/** Dispara uma fala do Netinho quando a seção entra na tela (uma única vez). */
export function NetinhoCue({
  id,
  message,
  children,
  className,
}: {
  id: string;
  message: string;
  children?: ReactNode;
  className?: string;
}) {
  const { say } = useNetinho();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            say(id, message);
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, message, say]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Dispara uma fala assim que a página monta. */
export function useNetinhoOnMount(id: string, message: string) {
  const { say } = useNetinho();
  useEffect(() => {
    const t = setTimeout(() => say(id, message), 700);
    return () => clearTimeout(t);
  }, [id, message, say]);
}

export function NetinhoProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);
  const spoken = useRef<Set<string>>(new Set());
  const currentId = useRef<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  const say = useCallback((id: string, text: string) => {
    if (spoken.current.has(id)) return;
    spoken.current.add(id);
    currentId.current = id;
    setMessage(text);
  }, []);

  const value = useMemo(() => ({ say }), [say]);

  return (
    <NetinhoContext.Provider value={value}>
      {children}
      {visible ? (
        <div className="pointer-events-none fixed right-3 bottom-3 z-[80] flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:right-5 sm:bottom-5">
          {open && message ? (
            <div
              key={message}
              className="bv-pop pointer-events-auto w-[19rem] max-w-full rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-start gap-3">
                <RobotFace className="h-9 w-9 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Netinho · guia
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-card-foreground">{message}</p>
                </div>
              </div>
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Minimizar o Netinho" : "Abrir o Netinho"}
            className="bv-float pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-forest px-3 py-2 text-forest-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-105"
          >
            <RobotFace className="h-8 w-8" onDark />
            <span className="pr-1 text-xs font-semibold">{open ? "Netinho" : "Falar com o Netinho"}</span>
          </button>
        </div>
      ) : null}
    </NetinhoContext.Provider>
  );
}

export function RobotFace({ className, onDark }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Netinho">
      <rect
        x="7"
        y="12"
        width="34"
        height="28"
        rx="11"
        fill={onDark ? "var(--sand)" : "var(--forest)"}
      />
      <path
        d="M24 4v7"
        stroke={onDark ? "var(--sand)" : "var(--forest)"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="4" r="3" fill="var(--gold)" />
      <circle cx="17.5" cy="24" r="3.4" fill={onDark ? "var(--forest)" : "var(--sand)"} />
      <circle cx="30.5" cy="24" r="3.4" fill={onDark ? "var(--forest)" : "var(--sand)"} />
      <path
        d="M19 31.5c1.6 1.6 3.3 2.4 5 2.4s3.4-.8 5-2.4"
        stroke={onDark ? "var(--forest)" : "var(--gold)"}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
