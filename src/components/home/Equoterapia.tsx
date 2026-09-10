import equo from "@/assets/equoterapia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";
import { Activity, ArrowDownRight, Brain, HeartPulse, Users2 } from "lucide-react";

const cards = [
  { icon: Activity, titulo: "Desenvolvimento motor", texto: "Estimulação do equilíbrio, coordenação e tônus muscular." },
  { icon: Brain, titulo: "Desenvolvimento cognitivo", texto: "Atividades que estimulam atenção, percepção e aprendizagem." },
  { icon: HeartPulse, titulo: "Desenvolvimento emocional", texto: "Construção de confiança, segurança e autoestima." },
  { icon: Users2, titulo: "Socialização", texto: "Fortalecimento dos vínculos e interação com outras pessoas." },
];

export function Equoterapia() {
  return (
    <NetinhoCue id="equoterapia" message="Nesta área explicamos de forma simples como a equoterapia ajuda no desenvolvimento físico, motor, cognitivo e emocional.">
      <section id="equoterapia" className="scroll-mt-24 bg-secondary/55 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-clay uppercase"><span className="h-px w-8 bg-clay/60" /> Metodologia</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl">Quando o movimento encontra o cuidado.</h2>
            </Reveal>
            <Reveal delay={100} className="max-w-md lg:text-right">
              <p className="text-base leading-7 text-muted-foreground">A equoterapia utiliza o cavalo em uma abordagem terapêutica e educacional interdisciplinar, reunindo saúde, educação e equitação em um plano de atendimento para cada praticante.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <Reveal delay={80} className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[var(--shadow-lift)]">
              <img src={equo} alt="Praticante montado em um cavalo acompanhado por duas terapeutas em picadeiro ao ar livre" width={1408} height={1008} loading="lazy" className="h-full min-h-[24rem] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 via-forest/45 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">Cuidado · Movimento · Vínculo</span>
                <p className="mt-3 max-w-lg font-display text-2xl text-white sm:text-3xl">Uma experiência construída para olhar a pessoa por inteiro.</p>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {cards.map((c, i) => (
                <Reveal key={c.titulo} delay={140 + i * 80} className="group flex gap-4 rounded-[1.5rem] border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-105"><c.icon className="h-5 w-5" /></span>
                  <div><p className="font-display text-lg">{c.titulo}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{c.texto}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={220} className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary"><ArrowDownRight className="h-4 w-4" /> Conheça também o ecossistema digital do projeto</Reveal>
        </div>
      </section>
    </NetinhoCue>
  );
}
