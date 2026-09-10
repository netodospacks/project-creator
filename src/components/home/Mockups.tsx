import { ArrowDown, ArrowRight, BookOpen, CreditCard, LayoutDashboard, Monitor, Smartphone, UserRound } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import curso from "@/assets/curso.jpg";

const etapas = [
  { n: "01", titulo: "Site", texto: "Apresentação do projeto e seus caminhos de apoio.", icon: Monitor },
  { n: "02", titulo: "Curso", texto: "Catálogo de formações com páginas próprias.", icon: BookOpen },
  { n: "03", titulo: "Checkout", texto: "Fluxo de compra pensado para reduzir atrito.", icon: CreditCard },
  { n: "04", titulo: "Área do aluno", texto: "Conteúdo, progresso e continuidade do aprendizado.", icon: UserRound },
  { n: "05", titulo: "Admin", texto: "Gestão do ecossistema em um único ambiente.", icon: LayoutDashboard },
];

export function Mockups() {
  return (
    <section className="overflow-hidden bg-forest py-24 text-forest-foreground sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase"><span className="h-px w-8 bg-gold/70" /> Ecossistema digital</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.06] sm:text-5xl">Mais do que um site. Uma plataforma.</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-forest-foreground/70">Uma demonstração visual de como o projeto pode crescer de uma presença institucional para uma experiência digital completa.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-5">
          {etapas.map((etapa, i) => { const Icon = etapa.icon; return <Reveal key={etapa.titulo} delay={i * 70} className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-gold">{etapa.n}</span><Icon className="h-4 w-4 text-forest-foreground/60" /></div><h3 className="mt-8 font-display text-xl">{etapa.titulo}</h3><p className="mt-2 text-xs leading-5 text-forest-foreground/60">{etapa.texto}</p>{i < etapas.length - 1 ? <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-forest text-gold md:block" /> : null}</Reveal>; })}
        </div>

        <Reveal delay={180} className="mt-16">
          <div className="grid gap-5 lg:grid-cols-[1.45fr_.55fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-2 shadow-[var(--shadow-lift)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-background text-foreground">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-3"><span className="h-2 w-2 rounded-full bg-clay/60" /><span className="h-2 w-2 rounded-full bg-gold/70" /><span className="h-2 w-2 rounded-full bg-primary/50" /><span className="ml-3 flex-1 rounded-full bg-background px-3 py-1 text-[0.6rem] text-muted-foreground">centrobemviver.org.br</span></div>
                <img src={hero} alt="Demonstração do site institucional" loading="lazy" className="h-56 w-full object-cover sm:h-72" />
                <div className="grid gap-3 p-4 sm:grid-cols-3">{["Checkout", "Área do aluno", "Painel administrativo"].map((t) => <div key={t} className="rounded-xl border border-border bg-card p-4"><p className="text-xs font-semibold">{t}</p><div className="mt-3 h-1.5 w-3/4 rounded-full bg-secondary" /><div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-secondary" /></div>)}</div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 sm:p-5">
              <div className="mx-auto max-w-[14rem] rounded-[2rem] border-[8px] border-white/10 bg-background p-1 shadow-[var(--shadow-lift)]"><div className="overflow-hidden rounded-[1.4rem] text-foreground"><img src={curso} alt="Demonstração da área de curso no celular" loading="lazy" className="h-36 w-full object-cover" /><div className="space-y-3 p-4"><p className="font-display text-base">Cuidados com Cavalos</p><div className="h-2 rounded-full bg-secondary"><div className="h-2 w-[68%] rounded-full bg-primary" /></div><p className="text-[0.68rem] text-muted-foreground">68% concluído · Aula 7 de 10</p><div className="rounded-xl bg-primary px-3 py-2 text-center text-[0.68rem] font-semibold text-primary-foreground">Continuar curso</div></div></div></div>
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-forest-foreground/60"><Smartphone className="h-4 w-4" /> Experiência responsiva</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-10 text-center"><div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-forest-foreground/60"><ArrowDown className="h-3.5 w-3.5 text-gold" /> Um ecossistema pronto para evoluir com o projeto</div></Reveal>
      </div>
    </section>
  );
}
