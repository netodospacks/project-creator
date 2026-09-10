import sobre from "@/assets/sobre.jpg";
import { Reveal } from "@/components/site/Reveal";
import { NetinhoCue } from "@/components/netinho/NetinhoProvider";
import { HeartHandshake, Leaf, Sparkles, Users } from "lucide-react";

const destaques = [
  { icon: HeartHandshake, titulo: "Ambiente acolhedor", texto: "Recepção humana e atenta a cada família." },
  { icon: Leaf, titulo: "Contato com a natureza", texto: "Sessões ao ar livre, em meio ao verde do haras." },
  { icon: Sparkles, titulo: "Equoterapia", texto: "O cavalo como parceiro terapêutico e educacional." },
  { icon: Users, titulo: "Desenvolvimento humano", texto: "Equipe interdisciplinar acompanhando cada evolução." },
];

export function Sobre() {
  return (
    <NetinhoCue id="sobre" message="Aqui o visitante conhece a história do Centro Bem Viver, sua missão e o impacto que o projeto gera.">
      <section id="projeto" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.22em] text-clay uppercase">
              <span className="h-px w-8 bg-clay/60" /> O Projeto
            </span>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.08] sm:text-5xl">
              Um espaço para desenvolver, cuidar e transformar.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              O Centro Bem Viver nasceu com o propósito de oferecer um ambiente acolhedor e integrado à natureza, utilizando a equoterapia como ferramenta de desenvolvimento físico, motor, cognitivo e emocional.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {destaques.map((d, i) => (
                <Reveal key={d.titulo} delay={i * 80} className="group rounded-[1.5rem] border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-105">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-display text-lg">{d.titulo}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{d.texto}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-sand/60 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-card p-2 shadow-[var(--shadow-lift)]">
                <img src={sobre} alt="Haras com cercas de madeira, cavalos e vegetação nativa ao amanhecer" width={1200} height={1200} loading="lazy" className="aspect-[5/4] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <div className="absolute -bottom-5 left-5 max-w-[18rem] rounded-2xl border border-border/70 bg-card/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:left-8">
                <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Parceria</p>
                <p className="mt-1 font-display text-base">Apoio estratégico Sebrae/PB</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Consultorias e capacitações em gestão que ajudaram a estruturar juridicamente a instituição.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </NetinhoCue>
  );
}
