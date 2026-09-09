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
    <NetinhoCue
      id="sobre"
      message="Aqui o visitante conhece a história do Centro Bem Viver, sua missão e o impacto que o projeto gera."
    >
      <section id="projeto" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">O Projeto</span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Um espaço para desenvolver, cuidar e transformar
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              O Centro Bem Viver nasceu com o propósito de oferecer um ambiente acolhedor e integrado
              à natureza, utilizando a equoterapia como ferramenta de desenvolvimento físico, motor,
              cognitivo e emocional.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {destaques.map((d, i) => (
                <Reveal
                  key={d.titulo}
                  delay={i * 90}
                  className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <d.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-lg">{d.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={sobre}
                alt="Haras com cercas de madeira, cavalos e vegetação nativa ao amanhecer"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">Selo</p>
                <p className="mt-1 text-sm font-semibold">Apoio estratégico Sebrae/PB</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Consultorias e capacitações em gestão que ajudaram a estruturar juridicamente a
                  instituição.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </NetinhoCue>
  );
}
