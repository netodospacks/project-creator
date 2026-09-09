import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Início", hash: "#inicio" },
  { label: "O Projeto", hash: "#projeto" },
  { label: "Equoterapia", hash: "#equoterapia" },
  { label: "Impacto", hash: "#impacto" },
  { label: "Como Ajudar", hash: "#ajudar" },
  { label: "Cursos", hash: "#cursos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const naHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const href = (hash: string) => (naHome ? hash : `/${hash}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-forest-foreground">
            <span className="font-display text-sm">BV</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base tracking-tight text-foreground sm:text-lg">
              Centro Bem Viver
            </span>
            <span className="hidden text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase sm:block">
              Equoterapia · Gurinhém-PB
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.hash}
              href={href(l.hash)}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={href("#ajudar")}
            className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Quero Ajudar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="bv-fade-up border-t border-border bg-background/98 px-5 pb-6 backdrop-blur lg:hidden">
          <nav className="flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.hash}
                href={href(l.hash)}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={href("#ajudar")}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Quero Ajudar
          </a>
        </div>
      ) : null}
    </header>
  );
}
