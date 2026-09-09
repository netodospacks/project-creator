/**
 * Estado simulado da demonstração (compra, aluno, progresso).
 * Preparado para ser substituído por banco de dados + autenticação reais.
 */

export type DemoProduct = {
  id: "presencial" | "online";
  nome: string;
  preco: number;
  precoLabel: string;
  modalidade: string;
};

export const PRODUTOS: Record<DemoProduct["id"], DemoProduct> = {
  presencial: {
    id: "presencial",
    nome: "Curso Presencial de Cuidados com Cavalos",
    preco: 2000,
    precoLabel: "R$ 2.000,00",
    modalidade: "Presencial · Haras Nossa Senhora Aparecida",
  },
  online: {
    id: "online",
    nome: "Cuidados com Cavalos — Curso Online",
    preco: 497,
    precoLabel: "R$ 497,00",
    modalidade: "Online · 10+ aulas",
  },
};

const KEY = "bemviver-demo";

export type DemoState = {
  produtoId?: DemoProduct["id"];
  comprador?: { nome: string; email: string; cpf: string; telefone: string };
  pago?: boolean;
  aulaAtual?: number;
};

export function readDemo(): DemoState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(KEY) ?? "{}") as DemoState;
  } catch {
    return {};
  }
}

export function writeDemo(patch: DemoState) {
  if (typeof window === "undefined") return;
  const next = { ...readDemo(), ...patch };
  window.sessionStorage.setItem(KEY, JSON.stringify(next));
}

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const pixCode = (valor: number) =>
  `00020126580014BR.GOV.BCB.PIX0136centrobemviver@demo.org.br52040000530398654${String(
    valor.toFixed(2).length,
  ).padStart(2, "0")}${valor.toFixed(2)}5802BR5920CENTRO BEM VIVER PB6009GURINHEM62070503***6304DEMO`;
