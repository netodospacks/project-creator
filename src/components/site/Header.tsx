import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, X } from "lucide-react";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/82 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Centro Bem Viver — início">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-forest text-forest-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-sm">BV</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base tracking-tight text-foreground sm:text-lg">Centro Bem Viver</span>
            <span className="hidden text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase sm:block">Equoterapia · Gurinhém-PB</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.hash} href={href(l.hash)} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href={href("#ajudar")} className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
            Quero ajudar
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/80 text-foreground backdrop-blur transition-transform hover:scale-105">
            <Instagram className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/80 text-foreground backdrop-blur transition-transform hover:scale-105">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="bv-fade-up border-t border-border/70 bg-background/96 px-5 pb-6 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col py-2">
            {links.map((l) => (
              <a key={l.hash} href={href(l.hash)} onClick={() => setOpen(false)} className="border-b border-border/60 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-primary">{l.label}</a>
            ))}
          </nav>
          <a href={href("#ajudar")} onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]">Quero ajudar</a>
        </div>
      ) : null}
    </header>
  );
}
