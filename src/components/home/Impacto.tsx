import { CountUp, Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";

const numeros = [
  { valor: 100, prefixo: "+", label: "Momentos de desenvolvimento" },
  { valor: 4, prefixo: "", label: "Pilares de atuação" },
  { valor: 1, prefixo: "", label: "Propósito: transformar vidas" },
];

const jornada = ["Cuidado", "Confiança", "Desenvolvimento", "Autonomia"];

export function Impacto() {
  return (
    <NetinhoCue
      id="impacto"
      message="Essa parte mostra ao visitante que cada evolução representa uma transformação na vida dos alunos."
    >
      <section id="impacto" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Impacto</span>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Cada evolução merece ser celebrada
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Pequenas conquistas — um olhar, um passo, uma palavra — sustentam mudanças profundas na
            vida de quem participa.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {numeros.map((n, i) => (
            <Reveal
              key={n.label}
              delay={i * 110}
              className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]"
            >
              <CountUp
                to={n.valor}
                prefix={n.prefixo}
                className="font-display text-5xl text-primary"
              />
              <p className="mt-3 text-sm text-muted-foreground">{n.label}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground/80">
          Números demonstrativos, utilizados apenas como elementos visuais desta apresentação.
        </p>

        <Reveal delay={120} className="mt-16 rounded-[2rem] bg-forest px-6 py-12 text-forest-foreground sm:px-12">
          <p className="text-center text-[0.68rem] tracking-[0.22em] text-gold uppercase">
            A jornada do praticante
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-4">
            {jornada.map((etapa, i) => (
              <li key={etapa} className="relative text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/50 font-display text-lg text-gold">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-semibold">{etapa}</p>
                {i < jornada.length - 1 ? (
                  <span className="absolute top-6 -right-3 hidden h-px w-6 bg-gold/40 sm:block" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </NetinhoCue>
  );
}
