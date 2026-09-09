import equo from "@/assets/equoterapia.jpg";
import { Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";
import { Activity, Brain, HeartPulse, Users2 } from "lucide-react";

const cards = [
  {
    icon: Activity,
    titulo: "Desenvolvimento motor",
    texto: "Estimulação do equilíbrio, coordenação e tônus muscular.",
  },
  {
    icon: Brain,
    titulo: "Desenvolvimento cognitivo",
    texto: "Atividades que estimulam atenção, percepção e aprendizagem.",
  },
  {
    icon: HeartPulse,
    titulo: "Desenvolvimento emocional",
    texto: "Construção de confiança, segurança e autoestima.",
  },
  {
    icon: Users2,
    titulo: "Socialização",
    texto: "Fortalecimento dos vínculos e interação com outras pessoas.",
  },
];

export function Equoterapia() {
  return (
    <NetinhoCue
      id="equoterapia"
      message="Nesta área explicamos de forma simples como a equoterapia ajuda no desenvolvimento físico, motor, cognitivo e emocional."
    >
      <section id="equoterapia" className="scroll-mt-24 bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Metodologia</span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Quando o movimento encontra o cuidado
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A equoterapia utiliza o cavalo em uma abordagem terapêutica e educacional
              interdisciplinar, reunindo saúde, educação e equitação em um único plano de atendimento
              para cada praticante.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <Reveal delay={80}>
              <img
                src={equo}
                alt="Praticante montado em um cavalo acompanhado por duas terapeutas em picadeiro ao ar livre"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full min-h-[18rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal
                  key={c.titulo}
                  delay={140 + i * 90}
                  className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-lg">{c.titulo}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </NetinhoCue>
  );
}
