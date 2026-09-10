import { CountUp, Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";
import { ArrowUpRight, Check } from "lucide-react";

const numeros = [
  { valor: 100, prefixo: "+", label: "Momentos de desenvolvimento" },
  { valor: 4, prefixo: "", label: "Pilares de atuação" },
  { valor: 1, prefixo: "", label: "Propósito: transformar vidas" },
];
const jornada = ["Cuidado", "Confiança", "Desenvolvimento", "Autonomia"];

export function Impacto() {
  return (
    <NetinhoCue id="impacto" message="Essa parte mostra ao visitante que cada evolução representa uma transformação na vida dos alunos.">
      <section id="impacto" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-clay uppercase"><span className="h-px w-8 bg-clay/60" /> Impacto</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl">Cada evolução merece ser celebrada.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Pequenas conquistas — um olhar, um passo, uma palavra — sustentam mudanças profundas na vida de quem participa.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {numeros.map((n, i) => (
              <Reveal key={n.label} delay={i * 90} className="group rounded-[1.5rem] border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <CountUp to={n.valor} prefix={n.prefixo} className="font-display text-4xl text-primary sm:text-5xl" />
                <p className="mt-3 text-sm leading-5 text-muted-foreground">{n.label}</p>
                <ArrowUpRight className="mt-6 h-4 w-4 text-clay opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-5 text-right text-[0.68rem] text-muted-foreground/70">Números demonstrativos, utilizados apenas como elementos visuais desta apresentação.</p>

        <Reveal delay={120} className="relative mt-16 overflow-hidden rounded-[2rem] bg-forest px-6 py-10 text-forest-foreground shadow-[var(--shadow-lift)] sm:px-12 sm:py-12">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-gold/10" />
          <div className="relative">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase">A jornada do praticante</p><h3 className="mt-3 font-display text-2xl sm:text-3xl">Um caminho feito de etapas.</h3></div>
              <p className="max-w-xs text-sm leading-6 text-forest-foreground/65 sm:text-right">Uma apresentação visual do processo que conecta cuidado, vínculo e desenvolvimento.</p>
            </div>
            <ol className="mt-10 grid gap-3 sm:grid-cols-4">
              {jornada.map((etapa, i) => (
                <li key={etapa} className="relative rounded-2xl border border-white/10 bg-white/[.04] p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-gold-foreground">{i + 1}</span><span className="text-sm font-semibold">{etapa}</span></div>
                  <Check className="mt-5 h-4 w-4 text-gold/70" />
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>
    </NetinhoCue>
  );
}
