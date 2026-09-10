import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Play } from "lucide-react";
import curso from "@/assets/curso.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useNetinhoOnMount } from "@/components/netinho/NetinhoProvider";

export const Route = createFileRoute("/curso-online")({
  head: () => ({
    meta: [
      { title: "Curso Online de Cuidados com Cavalos — Centro Bem Viver" },
      {
        name: "description",
        content:
          "Mais de 10 aulas online sobre alimentação, higiene, manejo, segurança e rotina no cuidado com cavalos.",
      },
      { property: "og:title", content: "Cuidados com Cavalos — Curso Online" },
      { property: "og:description", content: "Aprenda de onde estiver, no seu ritmo, em 10+ aulas." },
    ],
  }),
  component: CursoOnline,
});

export const MODULOS = [
  "Módulo 01 — Introdução",
  "Módulo 02 — Conhecendo o cavalo",
  "Módulo 03 — Alimentação",
  "Módulo 04 — Higiene",
  "Módulo 05 — Manejo",
  "Módulo 06 — Segurança",
  "Módulo 07 — Rotina",
  "Módulo 08 — Equipamentos",
  "Módulo 09 — Cuidados",
  "Módulo 10 — Boas práticas",
];

const beneficios = [
  { titulo: "10+ aulas", texto: "Conteúdo completo do básico ao dia a dia." },
  { titulo: "Acesso digital", texto: "Assista pelo celular, tablet ou computador." },
  { titulo: "Conteúdo organizado", texto: "Módulos em sequência lógica de aprendizado." },
  { titulo: "No seu ritmo", texto: "Pause, volte e retome quando quiser." },
];

function CursoOnline() {
  useNetinhoOnMount(
    "curso-online",
    "Já este curso permite que o aluno aprenda de forma digital, com mais de 10 aulas.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase">
              Online
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Cuidados com Cavalos — Curso Online
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">Aprenda de onde estiver.</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b, i) => (
              <Reveal
                key={b.titulo}
                delay={i * 80}
                className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <p className="font-display text-lg">{b.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-secondary/60 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.3fr_1fr] lg:px-8">
            <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lift)]">
              <div className="relative">
                <img src={curso} alt="Prévia da plataforma de aulas" loading="lazy" className="h-72 w-full object-cover sm:h-96" />
                <div className="absolute inset-0 grid place-items-center bg-forest/45">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-card/95 shadow-[var(--shadow-lift)]">
                    <Play className="h-6 w-6 translate-x-0.5 text-primary" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-xl">Aula 01 — Boas-vindas ao curso</p>
                <div className="mt-4 h-1.5 rounded-full bg-secondary">
                  <div className="h-1.5 w-[12%] rounded-full bg-primary" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Prévia da plataforma de aulas</p>
              </div>
            </Reveal>

            <Reveal delay={120} className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl">Módulos</h2>
              <ul className="mt-5 space-y-2">
                {MODULOS.map((m, i) => {
                  const bloqueado = i > 2;
                  return (
                    <li
                      key={m}
                      className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm ${
                        bloqueado ? "border-border/70 bg-secondary/50 text-muted-foreground" : "border-border bg-background"
                      }`}
                    >
                      <span className="min-w-0 truncate">{m}</span>
                      {bloqueado ? (
                        <Lock className="h-4 w-4 shrink-0" />
                      ) : (
                        <Play className="h-4 w-4 shrink-0 text-primary" />
                      )}
                    </li>
                  );
                })}
              </ul>

              <Link
                to="/checkout"
                search={{ produto: "online" }}
                className="mt-7 block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                Começar agora
              </Link>
              <p className="mt-3 text-center text-[0.7rem] text-muted-foreground/80">
                Demonstração — pagamento não real
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
