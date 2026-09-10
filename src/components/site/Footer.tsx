import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-0 bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-3xl">Centro Bem Viver</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-forest-foreground/70">Transformando vidas através da conexão com o cavalo.</p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-gold uppercase">Apoio estratégico Sebrae/PB</span>
          </div>
          <div><p className="text-[0.68rem] font-semibold tracking-[0.2em] text-forest-foreground/50 uppercase">Navegar</p><ul className="mt-5 space-y-3 text-sm text-forest-foreground/80"><li><a className="transition-colors hover:text-gold" href="/#projeto">O Projeto</a></li><li><a className="transition-colors hover:text-gold" href="/#equoterapia">Equoterapia</a></li><li><a className="transition-colors hover:text-gold" href="/#ajudar">Como Ajudar</a></li><li><a className="transition-colors hover:text-gold" href="/#cursos">Cursos</a></li></ul></div>
          <div><p className="text-[0.68rem] font-semibold tracking-[0.2em] text-forest-foreground/50 uppercase">Ecossistema</p><ul className="mt-5 space-y-3 text-sm text-forest-foreground/80"><li><Link className="transition-colors hover:text-gold" to="/checkout">Checkout</Link></li><li><Link className="transition-colors hover:text-gold" to="/membros">Área de membros</Link></li><li><Link className="transition-colors hover:text-gold" to="/admin">Painel administrativo</Link></li><li><Link className="transition-colors hover:text-gold" to="/politica-de-privacidade">Privacidade</Link></li><li><Link className="transition-colors hover:text-gold" to="/termos-de-uso">Termos de uso</Link></li></ul></div>
          <div><p className="text-[0.68rem] font-semibold tracking-[0.2em] text-forest-foreground/50 uppercase">Onde estamos</p><div className="mt-5 flex gap-3 text-sm text-forest-foreground/80"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>Haras Nossa Senhora Aparecida<br />Zona Rural · Gurinhém — PB<br />CEP 58356-000</span></div><div className="mt-5 space-y-3 text-sm text-forest-foreground/60"><p className="flex items-center gap-2"><Instagram className="h-4 w-4 text-gold" /> Instagram · a definir</p><p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-gold" /> WhatsApp · a definir</p><p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> E-mail · a definir</p></div></div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-forest-foreground/10 pt-6 text-xs text-forest-foreground/50 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Centro Bem Viver · Gurinhém, Paraíba</span><span className="inline-flex items-center gap-2"><ArrowUpRight className="h-3.5 w-3.5 text-gold" /> Demonstração do projeto — conteúdos e pagamentos simulados</span></div>
      </div>
    </footer>
  );
}
