import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Calendar } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenReservation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Conceito', href: '#conceito' },
    { label: 'Menu', href: '#menu' },
    { label: 'Destaque', href: '#destaque' },
    { label: 'Nossa Cozinha', href: '#cozinha' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0d1713]/90 backdrop-blur-md border-b border-[#24372e]/60 shadow-lg shadow-black/20 py-3.5'
            : 'bg-[#f7f5f0]/90 backdrop-blur-md border-b border-[#c58253]/20 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-baseline gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253]"
            aria-label="ORIGEM Restaurante - Início"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#1b2b23] dark:text-[#f3efe6] transition-colors">
              ORIGEM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c58253] group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.16em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative py-1 transition-colors ${
                  darkMode
                    ? 'text-[#d4cebd] hover:text-[#e4a77d]'
                    : 'text-[#35433b] hover:text-[#a86539]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode switch */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253] ${
                darkMode
                  ? 'text-[#e4a77d] hover:bg-[#1a2d24]'
                  : 'text-[#6b5847] hover:bg-[#eae4d5]'
              }`}
              title={darkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              aria-label={darkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Reserve Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-medium text-white bg-[#1a2d24] dark:bg-[#c58253] hover:bg-[#c58253] dark:hover:bg-[#d69766] transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-98 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253]"
            >
              <Calendar size={14} className="opacity-90" />
              <span>Reservar Mesa</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253] ${
                darkMode
                  ? 'text-[#f3efe6] hover:bg-[#1a2d24]'
                  : 'text-[#1b2b23] hover:bg-[#eae4d5]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-3 pt-4 pb-6 px-4 rounded-xl border transition-all ${
              darkMode
                ? 'bg-[#101c17] border-[#22382e] shadow-2xl'
                : 'bg-[#faf8f3] border-[#e0d9cb] shadow-xl'
            }`}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm tracking-wider uppercase font-medium rounded-md transition-colors ${
                    darkMode
                      ? 'text-[#e5dfd2] hover:bg-[#182921] hover:text-[#e4a77d]'
                      : 'text-[#2b3a32] hover:bg-[#ede7da] hover:text-[#9e5b2f]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#c58253]/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 px-4 text-xs tracking-widest uppercase font-semibold text-white bg-[#c58253] hover:bg-[#b26f42] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  <span>Reservar Mesa</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
