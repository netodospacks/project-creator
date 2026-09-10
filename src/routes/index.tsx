import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/home/Hero";
import { Sobre } from "@/components/home/Sobre";
import { Equoterapia } from "@/components/home/Equoterapia";
import { Impacto } from "@/components/home/Impacto";
import { Localizacao } from "@/components/home/Localizacao";
import { ComoAjudar } from "@/components/home/ComoAjudar";
import { Cursos } from "@/components/home/Cursos";
import { Mockups } from "@/components/home/Mockups";
import { useNetinhoOnMount } from "@/components/netinho/NetinhoProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro Bem Viver — Equoterapia que transforma vidas" },
      {
        name: "description",
        content:
          "Conheça o Centro Bem Viver: equoterapia, cursos sobre cuidados com cavalos e formas de apoiar o projeto em Gurinhém, Paraíba.",
      },
      { property: "og:title", content: "Centro Bem Viver — Equoterapia que transforma vidas" },
      {
        property: "og:description",
        content:
          "Cuidado, educação e equoterapia para estimular o desenvolvimento, a autonomia e novas possibilidades.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useNetinhoOnMount(
    "boas-vindas",
    "Olá! Eu sou o Netinho 🤖. Vou te mostrar como pode funcionar toda a experiência digital do Centro Bem Viver.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Equoterapia />
        <Impacto />
        <Localizacao />
        <ComoAjudar />
        <Cursos />
        <Mockups />
      </main>
      <Footer />
    </div>
  );
}
