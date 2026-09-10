import hero from "@/assets/hero.jpg";
import { ArrowDown, ArrowRight, Heart } from "lucide-react";

const marcadores = ["Equoterapia", "Desenvolvimento", "Autonomia", "Impacto"];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[94svh] overflow-hidden bg-forest">
      <img src={hero} alt="Criança em cadeira de rodas tocando o focinho de um cavalo ao lado de uma terapeuta, ao pôr do sol" width={1920} height={1200} className="bv-slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/68 to-forest/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,oklch(0.8_0.1_85_/_0.18),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-16 lg:justify-center lg:px-8 lg:pb-20">
        <div className="max-w-4xl">
          <span className="bv-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-forest/35 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase shadow-[var(--shadow-soft)] backdrop-blur-md" style={{ animationDelay: "120ms" }}>
            Gurinhém · Paraíba
          </span>

          <h1 className="bv-fade-up mt-5 max-w-4xl font-display text-[clamp(2.7rem,7vw,6.6rem)] leading-[0.98] tracking-[-0.045em] text-forest-foreground" style={{ animationDelay: "220ms" }}>
            Transformando vidas através da conexão com o cavalo
          </h1>

          <p className="bv-fade-up mt-6 max-w-2xl text-[clamp(1rem,1.7vw,1.2rem)] leading-relaxed text-forest-foreground/85" style={{ animationDelay: "340ms" }}>
            Um projeto que une cuidado, educação e equoterapia para estimular o desenvolvimento, a autonomia e novas possibilidades.
          </p>

          <div className="bv-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "460ms" }}>
            <a href="#projeto" className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5">
              Conheça o projeto <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#ajudar" className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-forest/20 px-6 py-3.5 text-sm font-semibold text-gold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground">
              <Heart className="h-4 w-4" /> Quero ajudar
            </a>
          </div>
        </div>

        <ul className="bv-fade-up mt-10 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4" style={{ animationDelay: "600ms" }}>
          {marcadores.map((m) => (
            <li key={m} className="rounded-2xl border border-forest-foreground/15 bg-forest/30 px-3 py-3 text-center text-[0.7rem] font-semibold tracking-wide text-forest-foreground/90 backdrop-blur-md">{m}</li>
          ))}
        </ul>

        <a href="#projeto" aria-label="Rolar para conhecer o projeto" className="bv-fade-up absolute bottom-5 right-5 hidden items-center gap-2 text-[0.65rem] font-semibold tracking-[0.18em] text-forest-foreground/70 uppercase lg:flex" style={{ animationDelay: "800ms" }}>
          Descubra <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
