import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import curso from "@/assets/curso.jpg";

export function Mockups() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Multiplataforma</span>
        <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
          A mesma experiência em qualquer tela
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Site institucional, checkout, área do aluno e página de curso adaptados para desktop,
          notebook e celular.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          {/* Notebook / desktop */}
          <div>
            <div className="rounded-t-2xl border-4 border-b-0 border-forest bg-forest p-2">
              <div className="overflow-hidden rounded-lg bg-background">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-clay/50" />
                  <span className="h-2 w-2 rounded-full bg-gold/70" />
                  <span className="h-2 w-2 rounded-full bg-primary/50" />
                  <span className="ml-3 truncate rounded-full bg-background px-3 py-0.5 text-[0.6rem] text-muted-foreground">
                    centrobemviver.org.br
                  </span>
                </div>
                <img src={hero} alt="Site institucional em um notebook" loading="lazy" className="h-56 w-full object-cover sm:h-72" />
                <div className="grid gap-3 p-4 sm:grid-cols-3">
                  {["Checkout", "Área de membros", "Painel admin"].map((t) => (
                    <div key={t} className="rounded-xl border border-border bg-card p-3">
                      <p className="text-xs font-semibold">{t}</p>
                      <div className="mt-2 h-1.5 w-3/4 rounded-full bg-secondary" />
                      <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-secondary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-[108%] max-w-none -translate-x-[4%] rounded-b-2xl bg-forest/80" />
          </div>

          {/* Smartphone */}
          <div className="mx-auto w-full max-w-[16rem]">
            <div className="rounded-[2.2rem] border-[10px] border-forest bg-forest shadow-[var(--shadow-lift)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-background">
                <img src={curso} alt="Página do curso em um smartphone" loading="lazy" className="h-40 w-full object-cover" />
                <div className="space-y-3 p-4">
                  <p className="font-display text-base">Cuidados com Cavalos</p>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 w-[68%] rounded-full bg-primary" />
                  </div>
                  <p className="text-[0.7rem] text-muted-foreground">68% concluído · Aula 7 de 10</p>
                  <div className="rounded-xl bg-primary px-3 py-2 text-center text-[0.7rem] font-semibold text-primary-foreground">
                    Continuar curso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
