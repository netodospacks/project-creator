import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <p className="font-display text-2xl">Centro Bem Viver</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-forest-foreground/75">
            Transformando vidas através da conexão com o cavalo.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-[0.7rem] tracking-[0.16em] text-gold uppercase">
            Apoio estratégico Sebrae/PB
          </span>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-forest-foreground/60 uppercase">Navegar</p>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/85">
            <li><a className="hover:text-gold" href="/#projeto">O Projeto</a></li>
            <li><a className="hover:text-gold" href="/#equoterapia">Equoterapia</a></li>
            <li><a className="hover:text-gold" href="/#ajudar">Como Ajudar</a></li>
            <li><a className="hover:text-gold" href="/#cursos">Cursos</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-forest-foreground/60 uppercase">Demonstração</p>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/85">
            <li><Link className="hover:text-gold" to="/checkout">Checkout</Link></li>
            <li><Link className="hover:text-gold" to="/membros">Área de membros</Link></li>
            <li><Link className="hover:text-gold" to="/admin">Painel administrativo</Link></li>
            <li><Link className="hover:text-gold" to="/politica-de-privacidade">Política de Privacidade</Link></li>
            <li><Link className="hover:text-gold" to="/termos-de-uso">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] tracking-[0.2em] text-forest-foreground/60 uppercase">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Haras Nossa Senhora Aparecida
                <br />
                Zona Rural · Gurinhém — PB
                <br />
                CEP 58356-000
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0 text-gold" /> Instagram (a definir)
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" /> WhatsApp (a definir)
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" /> E-mail (a definir)
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-forest-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Centro Bem Viver · Gurinhém, Paraíba</span>
          <span className="rounded-full border border-forest-foreground/25 px-3 py-1">
            Demonstração do projeto — conteúdos e pagamentos simulados
          </span>
        </div>
      </div>
    </footer>
  );
}
