import { useState } from "react";
import { Check, Copy, Heart, QrCode as QrIcon, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { QrCode } from "@/components/site/QrCode";
import { NetinhoCue, useNetinho } from "@/components/netinho/NetinhoProvider";
import { formatBRL, pixCode } from "@/lib/demo-store";

const valores = [20, 50, 100, 200];

export function ComoAjudar() {
  const [selecionado, setSelecionado] = useState<number>(50);
  const [outro, setOutro] = useState("");
  const [modal, setModal] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const { say } = useNetinho();

  const valor = outro ? Number(outro.replace(/\D/g, "")) || 0 : selecionado;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(pixCode(valor));
    } catch {
      /* demonstração */
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2200);
  };

  return (
    <NetinhoCue
      id="ajudar"
      message="Quem quiser contribuir poderá encontrar aqui uma forma simples e transparente de apoiar o projeto."
    >
      <section id="ajudar" className="scroll-mt-24 bg-secondary/60 py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-[0.68rem] tracking-[0.22em] text-clay uppercase">Como ajudar</span>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Você também pode fazer parte dessa transformação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Existem diferentes formas de apoiar o Centro Bem Viver. Sua contribuição ajuda a
              fortalecer o projeto e ampliar seu impacto.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:p-10">
            <p className="text-sm font-semibold">Escolha um valor</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {valores.map((v) => {
                const ativo = !outro && selecionado === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => {
                      setOutro("");
                      setSelecionado(v);
                    }}
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      ativo
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "border-border bg-background text-foreground"
                    }`}
                  >
                    R$ {v}
                  </button>
                );
              })}
              <input
                inputMode="numeric"
                value={outro}
                onChange={(e) => setOutro(e.target.value)}
                placeholder="Outro valor"
                aria-label="Outro valor"
                className="rounded-2xl border border-border bg-background px-4 py-4 text-center text-sm font-semibold outline-none focus:border-primary"
              />
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Contribuição selecionada:{" "}
                <span className="font-semibold text-foreground">{formatBRL(valor)}</span>
              </p>
              <button
                type="button"
                disabled={valor <= 0}
                onClick={() => {
                  setModal(true);
                  say(
                    "pix-doacao",
                    "O pagamento poderá ser realizado através de Pix. Nesta demonstração, nada é cobrado de verdade.",
                  );
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] disabled:opacity-50"
              >
                <Heart className="h-4 w-4" /> Contribuir via Pix
              </button>
            </div>
          </Reveal>
        </div>

        {modal ? (
          <div className="fixed inset-0 z-[90] grid place-items-center bg-forest/60 p-4 backdrop-blur-sm">
            <div className="bv-pop w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <p className="font-display text-xl">Contribuição ao Centro Bem Viver</p>
                  <p className="mt-1 text-sm text-muted-foreground">{formatBRL(valor)}</p>
                </div>
                <button
                  type="button"
                  aria-label="Fechar"
                  onClick={() => setModal(false)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid place-items-center rounded-3xl bg-secondary/70 p-6">
                <QrCode className="h-44 w-44 rounded-xl" seed={valor + 3} />
                <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <QrIcon className="h-3.5 w-3.5" /> QR Code fictício
                </p>
              </div>

              <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Pix copia e cola
              </p>
              <p className="mt-2 truncate rounded-2xl border border-border bg-background px-4 py-3 font-mono text-xs text-muted-foreground">
                {pixCode(valor)}
              </p>

              <button
                type="button"
                onClick={copiar}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {copiado ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copiado ? "Código copiado!" : "Copiar código Pix"}
              </button>

              <div className="mt-5 flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm text-accent-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                Pagamento aguardando confirmação
              </div>
              <p className="mt-3 text-center text-[0.7rem] text-muted-foreground/80">
                Demonstração — pagamento não real
              </p>
            </div>
          </div>
        ) : null}
      </section>
    </NetinhoCue>
  );
}
