import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Sparkles } from "lucide-react";
import equo from "@/assets/equoterapia.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useNetinhoOnMount } from "@/components/netinho/NetinhoProvider";

export const Route = createFileRoute("/curso-presencial")({
  head: () => ({
    meta: [
      { title: "Curso Presencial de Cuidados com Cavalos — Centro Bem Viver" },
      {
        name: "description",
        content:
          "Experiência prática no Haras Nossa Senhora Aparecida: manejo, alimentação, higiene, segurança e rotina dos cavalos.",
      },
      { property: "og:title", content: "Curso Presencial de Cuidados com Cavalos" },
      {
        property: "og:description",
        content: "Aprenda na prática, no ambiente do haras, com orientação especializada.",
      },
    ],
  }),
  component: CursoPresencial,
});

const aprendizados = [
  { titulo: "Manejo", texto: "Como conduzir, aproximar-se e lidar com o animal com segurança." },
  { titulo: "Alimentação", texto: "Rotinas alimentares, volumosos, concentrados e água." },
  { titulo: "Higiene", texto: "Escovação, cascos, banho e cuidados diários com a pelagem." },
  { titulo: "Segurança", texto: "Boas práticas para evitar acidentes na lida com cavalos." },
  { titulo: "Rotina", texto: "Organização do dia a dia da baia e da propriedade." },
  { titulo: "Cuidados básicos", texto: "Sinais de saúde, atenção veterinária e prevenção." },
];

const perfis = [
  "Famílias e voluntários do projeto",
  "Proprietários e futuros proprietários de cavalos",
  "Estudantes de áreas ligadas a animais",
  "Trabalhadores rurais e tratadores",
];

function CursoPresencial() {
  useNetinhoOnMount("curso-presencial", "Este é o curso presencial, com investimento de R$ 2.000,00.");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <span className="rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase">
                Presencial
              </span>
              <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Curso Presencial de Cuidados com Cavalos
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Uma experiência prática para quem deseja aprender diretamente no ambiente do haras os
                principais cuidados e rotinas relacionadas aos cavalos.
              </p>
              <p className="mt-8 font-display text-4xl text-primary">R$ 2.000,00</p>
              <Link
                to="/checkout"
                search={{ produto: "presencial" }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
              >
                <Sparkles className="h-4 w-4" /> Quero me inscrever
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={equo}
                alt="Equipe cuidando de um cavalo no haras"
                width={1408}
                height={1008}
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl">O que você vai aprender</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aprendizados.map((a, i) => (
                <Reveal
                  key={a.titulo}
                  delay={i * 70}
                  className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="font-display text-lg">{a.titulo}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl">Para quem é</h2>
              <ul className="mt-6 space-y-3">
                {perfis.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="rounded-[2rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl">Informações</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Modalidade</dt>
                  <dd className="font-semibold">Presencial</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Local</dt>
                  <dd className="flex items-center gap-2 text-right font-semibold">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" /> Haras Nossa Senhora Aparecida
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Investimento</dt>
                  <dd className="font-display text-xl text-primary">R$ 2.000,00</dd>
                </div>
              </dl>
              <Link
                to="/checkout"
                search={{ produto: "presencial" }}
                className="mt-8 block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                Comprar curso
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
