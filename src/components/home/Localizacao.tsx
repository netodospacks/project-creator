import { MapPin, Trees } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function Localizacao() {
  return (
    <section id="localizacao" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Localização</span>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Em meio à natureza</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            As atividades acontecem em um ambiente rural tranquilo, cercado por verde, espaço aberto e
            o ritmo calmo do campo.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="flex items-center gap-2 font-display text-lg">
              <Trees className="h-5 w-5 text-primary" /> Haras Nossa Senhora Aparecida
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Fazenda Nossa Senhora Aparecida, S/Nº
              <br />
              Zona Rural
              <br />
              Gurinhém — PB
              <br />
              CEP 58356-000
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[var(--shadow-lift)]">
            <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_25%,var(--accent),transparent_55%),radial-gradient(circle_at_75%_70%,var(--sand),transparent_60%)]">
              <svg viewBox="0 0 400 300" className="h-full w-full">
                <path d="M0 210 C 90 180 150 240 230 200 S 360 150 400 175" fill="none" stroke="var(--gold)" strokeWidth="3" strokeDasharray="8 7" />
                <path d="M-10 120 C 80 100 140 150 240 110 S 380 80 410 95" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.35" />
                {[
                  [60, 250],
                  [130, 90],
                  [300, 240],
                  [340, 110],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="var(--primary)" opacity="0.35" />
                ))}
                <g transform="translate(196 130)">
                  <circle r="26" fill="var(--forest)" opacity="0.12" />
                  <circle r="13" fill="var(--forest)" />
                  <circle r="5" fill="var(--gold)" />
                </g>
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <p className="min-w-0 truncate text-sm">Gurinhém — Paraíba · mapa ilustrativo</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
