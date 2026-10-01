import React from 'react';
import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { ASSET_IMAGES } from '../data/restaurantData';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 pb-16 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#c58253_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic & Conceptual Identity (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c58253] font-medium">
              <span className="w-8 h-[1px] bg-[#c58253]" />
              <span>Gastronomia Autoral Brasileira</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#c58253]" />
              <span className="hidden sm:inline-block">Biomas & Alta Técnica</span>
            </div>

            {/* Main Brand Title & Statement with Mask Reveal */}
            <div className="space-y-3">
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.14em] font-light text-[#12231c] dark:text-[#f7f5f0] uppercase leading-[0.95]"
                >
                  ORIGEM
                </motion.h1>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.p
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#3b4c42] dark:text-[#d3ccbe] font-normal leading-tight"
                >
                  Cozinha contemporânea brasileira.
                </motion.p>
              </div>
            </div>

            {/* Core Manifesto Quote */}
            <div className="relative pl-6 sm:pl-8 border-l border-[#c58253]/40 py-2">
              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#2b3a32] dark:text-[#e4dfd2] font-light italic leading-relaxed">
                “Da terra para a mesa. Da memória para o presente.”
              </blockquote>
              <p className="mt-2 text-xs sm:text-sm tracking-wide text-[#5a6a60] dark:text-[#9ea89f] font-normal max-w-xl">
                Ingredientes nativos selecionados de pequenos produtores, reinterpretados através de rigor técnico contemporâneo e respeito profundo às estações da terra.
              </p>
            </div>

            {/* Interactive Action Hub */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#1a2d24] dark:bg-[#c58253] hover:bg-[#c58253] dark:hover:bg-[#d69766] transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer flex items-center gap-3 group"
              >
                <span>Solicitar Reserva</span>
                <ArrowDownRight size={16} className="text-[#c58253] dark:text-[#1a2d24] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#1a2d24] dark:text-[#f7f5f0] border border-[#1a2d24]/20 dark:border-[#f7f5f0]/20 hover:border-[#c58253] dark:hover:border-[#c58253] hover:text-[#c58253] dark:hover:text-[#c58253] transition-colors cursor-pointer"
              >
                Conhecer o Cardápio
              </button>
            </div>

            {/* Minimalist Micro Badges / Heritage Notes (Unboxed) */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#526359] dark:text-[#97a399] tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <Compass size={13} className="text-[#c58253]" />
                Jardim Aurora, SP
              </span>
              <span aria-hidden="true" className="text-[#c58253]/50">·</span>
              <span>Menu Degustação & À La Carte</span>
              <span aria-hidden="true" className="text-[#c58253]/50">·</span>
              <span>Carta de Vinhos Nacionais</span>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Fine Dining Visual with Asymmetrical Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative background framing offset */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#12231c]/10 to-[#c58253]/15 dark:from-[#1b3026] dark:to-[#382618] rounded-2xl transform rotate-1 scale-[1.02] -z-10" />

            <div className="relative group overflow-hidden rounded-xl shadow-2xl border border-[#c58253]/25 bg-[#12231c]">
              <img
                src={ASSET_IMAGES.hero}
                alt="Alta gastronomia autoral do restaurante ORIGEM apresentada sobre prato de cerâmica basáltica"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0d1713]/85 backdrop-blur-md border border-[#c58253]/30 rounded-lg text-white">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#e4a77d] font-semibold flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Criação Autoral
                  </span>
                  <span className="text-[11px] text-white/60 tracking-wider">Safra 2026</span>
                </div>
                <p className="font-serif text-sm sm:text-base font-light text-[#f0ebe0]">
                  Texturas de mandioca amarela, peixe marinado no tucupi e brotos frescos da Mantiqueira.
                </p>
              </div>
            </div>

            {/* Floating Editorial Stamp */}
            <div className="absolute -top-4 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f7f5f0] dark:bg-[#12231c] border border-[#c58253] p-1 shadow-lg flex items-center justify-center text-center">
              <div className="w-full h-full rounded-full border border-dashed border-[#c58253]/60 flex flex-col items-center justify-center p-1">
                <span className="text-[9px] uppercase tracking-widest text-[#c58253] font-semibold">ORIGEM</span>
                <span className="font-serif italic text-xs sm:text-sm text-[#12231c] dark:text-[#f7f5f0]">Cozinha</span>
                <span className="text-[8px] uppercase tracking-wider text-[#526359] dark:text-[#a0aca1]">2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

