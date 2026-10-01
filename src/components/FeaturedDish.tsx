import React from 'react';
import { ASSET_IMAGES } from '../data/restaurantData';
import { Sparkles, ArrowRight, UtensilsCrossed, Waves } from 'lucide-react';

interface FeaturedDishProps {
  onOpenReservation: () => void;
}

export const FeaturedDish: React.FC<FeaturedDishProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="destaque"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 bg-[#0f1d17] text-[#f7f5f0]"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#c58253]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#1a382c]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 border-b border-[#c58253]/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#e4a77d] font-semibold flex items-center gap-2 mb-2">
              <Sparkles size={14} />
              Criação Assinatura
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#f7f5f0] font-light tracking-wide">
              Prato Destaque
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9ea89f] block">
              Preço Sugerido
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#e4a77d] font-light tabular-nums">
              R$ 142,00
            </span>
          </div>
        </div>

        {/* Big Photography & Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large High-Fidelity Photography (7 cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-xl border border-[#c58253]/35 shadow-2xl bg-black/40">
              <img
                src={ASSET_IMAGES.peixeDaCosta}
                alt="Peixe da Costa grelhado com purê de raízes brasileiras e molho cítrico"
                className="w-full h-[400px] sm:h-[500px] lg:h-[580px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Contrast gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating badges on photo */}
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 bg-[#0d1713]/85 backdrop-blur-md border border-[#c58253]/50 text-[#e4a77d] text-xs uppercase tracking-[0.18em] font-medium rounded">
                  Pesca Costeira do Dia
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/80">
                <span className="flex items-center gap-1.5 font-light">
                  <Waves size={14} className="text-[#e4a77d]" />
                  Litoral Sul & Sudeste
                </span>
                <span className="italic font-serif text-sm text-[#e4a77d]">
                  Cocção na brasa a 240°C
                </span>
              </div>
            </div>

            {/* Inset copper detail border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#c58253]/20 rounded-xl pointer-events-none -z-10" />
          </div>

          {/* Sensory Narrative & Composition Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f5f0] font-light mb-4">
                Peixe da Costa
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-[#d4cebd] leading-relaxed font-light border-l-2 border-[#c58253] pl-4 my-4">
                “Peixe fresco grelhado, purê de raízes brasileiras, legumes tostados e molho cítrico da casa.”
              </p>
              <p className="text-sm sm:text-base text-[#aab6ad] font-light leading-relaxed">
                Este prato sintetiza com perfeição a proposta do ORIGEM: o encontro do frescor marinho do litoral brasileiro com a rusticidade elegante das raízes cultivadas no interior do país.
              </p>
            </div>

            {/* Sensory Elements Breakdown */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-lg bg-[#14261e] border border-[#263e32]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e4a77d] font-semibold mb-1">
                  <UtensilsCrossed size={14} />
                  Purê de Raízes Brasileiras
                </div>
                <p className="text-xs sm:text-sm text-[#ccd6ce] font-light">
                  Mandioca amarela e cará-moela defumados em lenha de macieira, emulsionados com manteiga de garrafa do sertão.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#14261e] border border-[#263e32]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e4a77d] font-semibold mb-1">
                  <Sparkles size={14} />
                  Molho Cítrico da Casa
                </div>
                <p className="text-xs sm:text-sm text-[#ccd6ce] font-light">
                  Redução translúcida de limão-cravo e tangerina ponkã infusionada com capim-limão da horta agroecológica.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0f1d17] bg-[#e4a77d] hover:bg-[#d69766] transition-all duration-200 cursor-pointer shadow-md rounded flex items-center justify-center gap-2 group"
              >
                <span>Reservar e Degustar</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-[#8f9d93] text-center sm:text-left">
                Disponibilidade limitada conforme pesca do dia.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
