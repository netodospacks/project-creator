import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play } from "lucide-react";
import curso from "@/assets/curso.jpg";
import equo from "@/assets/equoterapia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";

const produtos = [
  { etiqueta: "Presencial", imagem: equo, titulo: "Curso Presencial", preco: "R$ 2.000,00", descricao: "Uma experiência prática para quem deseja aprender diretamente no ambiente do haras os principais cuidados e rotinas relacionadas aos cavalos.", itens: ["Experiência presencial", "Conteúdo prático", "Orientação especializada", "Vivência no ambiente do haras"], to: "/curso-presencial" as const },
  { etiqueta: "Online", imagem: curso, titulo: "Curso Online — Cuidados com Cavalos", preco: "Curso digital", descricao: "Mais de 10 aulas para aprender de forma online os principais cuidados, rotinas e conhecimentos relacionados aos cavalos.", itens: ["10+ aulas", "Acesso digital", "Estude no seu ritmo", "Conteúdo organizado por módulos"], to: "/curso-online" as const },
];

export function Cursos() {
  return (
    <NetinhoCue id="cursos" message="Além do trabalho social, a plataforma também poderá apresentar cursos relacionados aos cuidados com cavalos.">
      <section id="cursos" className="scroll-mt-24 bg-secondary/55 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-clay uppercase"><span className="h-px w-8 bg-clay/60" /> Formação</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl">Conhecimento que abre novos caminhos.</h2>
            </Reveal>
            <Reveal delay={100} className="max-w-sm lg:text-right"><p className="text-base leading-7 text-muted-foreground">Cursos presenciais e digitais apresentados dentro de uma experiência de aprendizado integrada.</p></Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {produtos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 110} className="group overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.14em] text-foreground uppercase backdrop-blur">{p.etiqueta}</span>
                  {p.etiqueta === "Online" ? <span className="absolute right-5 bottom-5 grid h-11 w-11 place-items-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-soft)]"><Play className="ml-0.5 h-4 w-4 fill-current" /></span> : null}
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="max-w-md font-display text-2xl sm:text-3xl">{p.titulo}</h3><span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">{p.preco}</span></div>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{p.descricao}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">{p.itens.map((item) => <li key={item} className="flex items-center gap-2 text-sm"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent"><Check className="h-3 w-3 text-primary" /></span>{item}</li>)}</ul>
                  <Link to={p.to} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">Conhecer curso <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </NetinhoCue>
  );
}
