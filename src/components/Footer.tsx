import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, Phone, MapPin, ArrowUp, Compass } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Conceito', href: '#conceito' },
    { label: 'Cardápio', href: '#menu' },
    { label: 'Prato Destaque', href: '#destaque' },
    { label: 'Nossa Cozinha', href: '#cozinha' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Reservas', href: '#reservas' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <footer className="bg-[#0b1410] text-[#f7f5f0] border-t border-[#c58253]/25 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#c58253]/20">
          {/* Brand & Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-normal text-white">
                {RESTAURANT_INFO.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#c58253]" />
            </div>

            <p className="font-serif italic text-base text-[#e4a77d] font-light">
              {RESTAURANT_INFO.subName}
            </p>

            <p className="text-xs sm:text-sm text-[#9ea89f] font-light leading-relaxed max-w-sm">
              “{RESTAURANT_INFO.tagline}”
            </p>

            <p className="text-xs text-[#728379] font-light leading-relaxed max-w-sm pt-2">
              Pesquisa contínua de ingredientes nativos, preservação de saberes tradicionais e celebração da alta gastronomia brasileira contemporânea.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#e4a77d] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#b4beb6] hover:text-[#e4a77d] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact, Hours & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#e4a77d] font-semibold">
              Contato & Visita
            </h4>

            <div className="space-y-2.5 text-xs text-[#b4beb6] font-light">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-[#c58253] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}, São Paulo - SP</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#c58253] shrink-0" />
                <a href="tel:1132894410" className="hover:text-white transition-colors font-mono">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Instagram size={15} className="text-[#c58253] shrink-0" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.instagram}
                </a>
              </p>
            </div>

            <div className="pt-2 border-t border-[#c58253]/15">
              <span className="text-[11px] uppercase tracking-wider text-[#e4a77d] block mb-1">
                Atendimento
              </span>
              <p className="text-xs text-[#9ea89f] leading-relaxed">
                Terça a Quinta: 19h às 23h<br />
                Sexta e Sábado: 19h às 00h<br />
                Domingo: 12h às 16h
              </p>
            </div>

            <div>
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 px-4 text-xs uppercase tracking-widest font-semibold text-[#0b1410] bg-[#e4a77d] hover:bg-[#d69766] transition-colors rounded cursor-pointer"
              >
                Solicitar Reserva
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#728379]">
          <p>
            © {new Date().getFullYear()} ORIGEM — Cozinha Contemporânea. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e4a77d] hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
