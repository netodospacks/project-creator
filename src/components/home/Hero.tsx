import hero from "@/assets/hero.jpg";
import { ArrowRight, Heart } from "lucide-react";

const marcadores = ["Equoterapia", "Desenvolvimento", "Autonomia", "Impacto"];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] overflow-hidden">
      <img
        src={hero}
        alt="Criança em cadeira de rodas tocando o focinho de um cavalo ao lado de uma terapeuta, ao pôr do sol"
        width={1920}
        height={1200}
        className="bv-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/70 to-forest/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-28 pb-20 lg:px-8">
        <span
          className="bv-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-forest/40 px-4 py-1.5 text-[0.68rem] tracking-[0.2em] text-gold uppercase backdrop-blur"
          style={{ animationDelay: "120ms" }}
        >
          Gurinhém · Paraíba
        </span>

        <h1
          className="bv-fade-up mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-forest-foreground sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "220ms" }}
        >
          Transformando vidas através da conexão com o cavalo
        </h1>

        <p
          className="bv-fade-up mt-6 max-w-xl text-base leading-relaxed text-forest-foreground/85 sm:text-lg"
          style={{ animationDelay: "340ms" }}
        >
          Um projeto que une cuidado, educação e equoterapia para estimular o desenvolvimento, a
          autonomia e novas possibilidades.
        </p>

        <div className="bv-fade-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: "460ms" }}>
          <a
            href="#projeto"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Conheça o projeto <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#ajudar"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3.5 text-sm font-semibold text-gold transition-colors duration-200 hover:bg-gold hover:text-gold-foreground"
          >
            <Heart className="h-4 w-4" /> Quero ajudar
          </a>
        </div>

        <ul
          className="bv-fade-up mt-14 grid grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-4"
          style={{ animationDelay: "600ms" }}
        >
          {marcadores.map((m) => (
            <li
              key={m}
              className="rounded-2xl border border-forest-foreground/20 bg-forest/35 px-4 py-3 text-center text-xs font-semibold tracking-wide text-forest-foreground/90 backdrop-blur-sm"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
