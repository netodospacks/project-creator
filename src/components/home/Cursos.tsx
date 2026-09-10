import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import curso from "@/assets/curso.jpg";
import equo from "@/assets/equoterapia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";

const produtos = [
  {
    etiqueta: "Presencial",
    imagem: equo,
    titulo: "Curso Presencial",
    preco: "R$ 2.000,00",
    descricao:
      "Uma experiência prática para quem deseja aprender diretamente no ambiente do haras os principais cuidados e rotinas relacionadas aos cavalos.",
    itens: [
      "Experiência presencial",
      "Conteúdo prático",
      "Orientação especializada",
      "Vivência no ambiente do haras",
    ],
    to: "/curso-presencial" as const,
  },
  {
    etiqueta: "Online",
    imagem: curso,
    titulo: "Curso Online — Cuidados com Cavalos",
    preco: "Curso digital",
    descricao:
      "Mais de 10 aulas para aprender de forma online os principais cuidados, rotinas e conhecimentos relacionados aos cavalos.",
    itens: ["10+ aulas", "Acesso digital", "Estude no seu ritmo", "Conteúdo organizado por módulos"],
    to: "/curso-online" as const,
  },
];

export function Cursos() {
  return (
    <NetinhoCue
      id="cursos"
      message="Além do trabalho social, a plataforma também poderá apresentar cursos relacionados aos cuidados com cavalos."
    >
      <section id="cursos" className="scroll-mt-24 bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Cursos</span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Aprenda a cuidar de cavalos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Conhecimento que aproxima pessoas, animais e novas oportunidades.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {produtos.map((p, i) => (
              <Reveal
                key={p.titulo}
                delay={i * 120}
                className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.imagem}
                    alt={p.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-card/95 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase backdrop-blur">
                    {p.etiqueta}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{p.titulo}</h3>
                  <p className="mt-2 font-display text-xl text-primary">{p.preco}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.descricao}</p>
                  <ul className="mt-5 space-y-2">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={p.to}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
                  >
                    Conhecer curso <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </NetinhoCue>
  );
}
