import React, { useState } from 'react';
import { SEASONAL_INGREDIENTS, HARVEST_CYCLE_INFO } from '../data/restaurantData';
import { Sprout, Compass, ArrowUpRight, Sun, Droplets, MapPin, Sparkles } from 'lucide-react';
import { SeasonalIngredient } from '../types';
import { AnimatedSection } from './AnimatedSection';
import { TitleReveal } from './TitleReveal';

interface SeasonalHarvestProps {
  onSelectDish: (dishId: string) => void;
}

export const SeasonalHarvest: React.FC<SeasonalHarvestProps> = ({ onSelectDish }) => {
  const [activeIngredient, setActiveIngredient] = useState<SeasonalIngredient>(
    SEASONAL_INGREDIENTS[0]
  );

  return (
    <section
      id="safra"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 border-t border-[#c58253]/15"
    >
      {/* Subtle organic background tint */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-[radial-gradient(#c58253_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
        {/* Editorial Section Header with Title Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <TitleReveal
              eyebrow={
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold">
                  <Sprout size={15} />
                  <span>Ciclos Naturais · Safra da Estação</span>
                </div>
              }
              title={
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide leading-tight">
                  Ingredientes no Pico do Bioma
                </h2>
              }
              subtitle={
                <p className="text-sm sm:text-base text-[#526359] dark:text-[#a0aca1] font-light leading-relaxed">
                  O cardápio do ORIGEM não impõe datas fixas; ele acompanha a respiração das águas, dos solos e das copas. Apresentamos os protagonistas colhidos neste exato momento pelos nossos produtores parceiros.
                </p>
              }
            />
          </div>

          {/* Current Season Capsule Marker */}
          <div className="p-4 sm:p-5 rounded-xl border border-[#c58253]/35 bg-[#eae4d5]/40 dark:bg-[#12231c]/60 max-w-sm backdrop-blur-xs">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="uppercase tracking-[0.2em] text-[#c58253] font-semibold flex items-center gap-1.5">
                <Sun size={13} />
                Estação Vigente
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="font-serif text-base sm:text-lg text-[#12231c] dark:text-[#f7f5f0] font-normal">
              {HARVEST_CYCLE_INFO.currentSeason}
            </p>
            <p className="text-xs text-[#6e7d73] dark:text-[#88968c] mt-1 font-light flex items-center gap-1.5">
              <Droplets size={12} className="text-[#c58253]" />
              {HARVEST_CYCLE_INFO.lunarPhase}
            </p>
          </div>
        </div>

        {/* Asymmetrical Layout: Big Showcase Column (7 cols) + Staggered Harvest Selector Column (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Stage: Selected Peak Ingredient (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl border border-[#c58253]/35 shadow-2xl bg-[#0e1913]">
              <img
                src={activeIngredient.imageUrl}
                alt={activeIngredient.name}
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Top Floating Tags */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                <span className="px-3.5 py-1.5 rounded-md text-xs uppercase tracking-[0.18em] font-semibold bg-[#0d1713]/85 text-[#e4a77d] border border-[#c58253]/40 backdrop-blur-md">
                  {activeIngredient.harvestCycle}
                </span>

                <span className="text-xs text-white/80 font-mono tracking-wider bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
                  {activeIngredient.peakPeriod}
                </span>
              </div>

              {/* Bottom In-Image Legend */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-serif italic text-xs sm:text-sm text-[#e4a77d] block mb-1">
                  {activeIngredient.scientificName}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight">
                  {activeIngredient.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70 mt-2">
                  <span className="flex items-center gap-1">
                    <Compass size={13} className="text-[#c58253]" />
                    {activeIngredient.biome}
                  </span>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#c58253]" />
                    {activeIngredient.region}
                  </span>
                </div>
              </div>
            </div>

            {/* Botanical & Culinary Dossier Below Image */}
            <div className="p-6 sm:p-8 bg-[#eae4d5]/40 dark:bg-[#12231c]/70 border border-[#c58253]/25 rounded-2xl space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c58253] font-semibold block">
                  Origem & Coleta Sustentável
                </span>
                <p className="text-sm sm:text-base text-[#3d4e44] dark:text-[#c4cec6] font-light leading-relaxed">
                  {activeIngredient.description}
                </p>
              </div>

              {/* Chef's Curatorial Note */}
              <div className="p-4 rounded-xl bg-[#f7f5f0] dark:bg-[#0c1611] border-l-2 border-[#c58253] space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#c58253] font-semibold flex items-center gap-1.5">
                  <Sparkles size={12} />
                  Aplicação na Nossa Cozinha
                </span>
                <p className="font-serif italic text-sm text-[#24352b] dark:text-[#dcd6c8] font-light leading-relaxed">
                  “{activeIngredient.curatorNote}”
                </p>
              </div>

              {/* Sensory Dimension Bars */}
              <div className="pt-2 border-t border-[#c58253]/15">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#6d7e73] dark:text-[#9ea89f] block mb-3 font-medium">
                  Perfil Organoléptico no Prato
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-[11px]">
                      <span className="text-[#3b4c42] dark:text-[#c4cec7]">Acidez</span>
                      <span className="font-mono text-[#c58253]">{activeIngredient.sensoryScores.acidez}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#c58253]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c58253] rounded-full transition-all duration-500"
                        style={{ width: `${activeIngredient.sensoryScores.acidez * 10}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[11px]">
                      <span className="text-[#3b4c42] dark:text-[#c4cec7]">Doçura</span>
                      <span className="font-mono text-[#c58253]">{activeIngredient.sensoryScores.docura}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#c58253]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c58253] rounded-full transition-all duration-500"
                        style={{ width: `${activeIngredient.sensoryScores.docura * 10}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[11px]">
                      <span className="text-[#3b4c42] dark:text-[#c4cec7]">Terrosidade</span>
                      <span className="font-mono text-[#c58253]">{activeIngredient.sensoryScores.aromaterroso}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#c58253]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c58253] rounded-full transition-all duration-500"
                        style={{ width: `${activeIngredient.sensoryScores.aromaterroso * 10}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-[11px]">
                      <span className="text-[#3b4c42] dark:text-[#c4cec7]">Mineralidade</span>
                      <span className="font-mono text-[#c58253]">{activeIngredient.sensoryScores.mineralidade}/10</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#c58253]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c58253] rounded-full transition-all duration-500"
                        style={{ width: `${activeIngredient.sensoryScores.mineralidade * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Link to Dish */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6d7e73] dark:text-[#88968c] block">
                    Prato que utiliza esta safra:
                  </span>
                  <span className="font-serif text-base text-[#12231c] dark:text-[#f7f5f0] font-medium">
                    {activeIngredient.dishName}
                  </span>
                </div>

                <button
                  onClick={() => onSelectDish(activeIngredient.dishId)}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#1a2d24] dark:bg-[#c58253] hover:bg-[#c58253] dark:hover:bg-[#d69766] transition-colors rounded-lg flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <span>Explorar no Cardápio</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Selection Column & Cyclical Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#c58253] font-semibold block">
                Seleção de Protagonistas
              </span>
              <p className="text-xs text-[#526359] dark:text-[#9ea89f] font-light">
                Selecione um ingrediente para examinar sua safra, terroir e notas de maturação:
              </p>
            </div>

            {/* Staggered Vertical Cards */}
            <div className="space-y-4">
              {SEASONAL_INGREDIENTS.map((ingredient) => {
                const isSelected = activeIngredient.id === ingredient.id;
                return (
                  <div
                    key={ingredient.id}
                    onClick={() => setActiveIngredient(ingredient)}
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#f7f5f0] dark:bg-[#14261e] border-[#c58253] shadow-lg translate-x-1 sm:translate-x-2'
                        : 'bg-[#eae4d5]/50 dark:bg-[#101c16] border-[#c58253]/20 hover:border-[#c58253]/50 hover:bg-[#eae4d5]/80 dark:hover:bg-[#14261e]/50'
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveIngredient(ingredient);
                      }
                    }}
                    aria-pressed={isSelected}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#c58253]" />
                    )}

                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <img
                        src={ingredient.imageUrl}
                        alt={ingredient.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-[#c58253]/30 shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#c58253] font-semibold truncate">
                            {ingredient.harvestCycle}
                          </span>
                          <span className="text-[10px] text-[#728379] dark:text-[#88968c] shrink-0 font-mono">
                            {ingredient.peakPeriod}
                          </span>
                        </div>

                        <h4 className="font-serif text-lg sm:text-xl text-[#12231c] dark:text-[#f7f5f0] font-normal leading-snug truncate">
                          {ingredient.name}
                        </h4>

                        <p className="text-xs text-[#526359] dark:text-[#9ea89f] truncate mt-0.5 font-light">
                          {ingredient.producer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Asymmetrical Natural Cycles Editorial Box */}
            <div className="p-6 rounded-2xl bg-[#0f1d17] text-[#f7f5f0] border border-[#c58253]/35 shadow-xl relative overflow-hidden mt-8">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#c58253]/15 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e4a77d] font-semibold block mb-2">
                Filosofia da Sazonalidade
              </span>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#f0ece1] font-light leading-relaxed">
                “Quando respeitamos o tempo da colheita, o ingrediente não precisa de artifícios. Ele chega ao prato inteiro, eloquente e vibrante.”
              </blockquote>

              <div className="mt-4 pt-3 border-t border-[#c58253]/25 flex items-center justify-between text-xs text-[#9ea89f]">
                <span>Helena Duarte</span>
                <span className="text-[#e4a77d] italic font-serif">Chef Executiva</span>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
