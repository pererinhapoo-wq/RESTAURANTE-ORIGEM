import React, { useState } from 'react';
import { MapPin, Clock, Phone, Copy, Check, Car, Compass, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { AnimatedSection } from './AnimatedSection';
import { TitleReveal } from './TitleReveal';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${RESTAURANT_INFO.address}, São Paulo - SP`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="localizacao"
      className="py-24 sm:py-32 relative transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        {/* Section Header with Title Reveal */}
        <div className="mb-14 sm:mb-18">
          <TitleReveal
            eyebrow={
              <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center gap-2">
                <Compass size={14} />
                Território & Acolhimento
              </span>
            }
            title={
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide">
                Localização & Horários
              </h2>
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Box */}
            <div className="p-6 sm:p-8 bg-[#eae4d5]/50 dark:bg-[#12231c] border border-[#c58253]/30 rounded-xl space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c58253] font-semibold block mb-1">
                  Nosso Endereço
                </span>
                <h3 className="font-serif text-2xl text-[#12231c] dark:text-[#f7f5f0] font-normal">
                  {RESTAURANT_INFO.name} — {RESTAURANT_INFO.subName}
                </h3>
                <p className="text-sm text-[#46564e] dark:text-[#b4beb6] mt-2 font-light flex items-start gap-2">
                  <MapPin size={16} className="text-[#c58253] shrink-0 mt-0.5" />
                  <span>{RESTAURANT_INFO.address}</span>
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#12231c] dark:text-[#f7f5f0] bg-white dark:bg-[#1a2d24] border border-[#c58253]/30 hover:border-[#c58253] rounded transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Endereço Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs text-[#526359] dark:text-[#9ea89f]">
                  <Car size={14} className="text-[#c58253]" />
                  <span>Valet cortesia na entrada</span>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c58253] font-semibold">
                <Clock size={15} />
                <span>Horários de Funcionamento</span>
              </div>

              <div className="divide-y divide-[#c58253]/20 border-y border-[#c58253]/20">
                {RESTAURANT_INFO.hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="py-3 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="text-[#2b3a32] dark:text-[#dfd9cc] font-medium">
                      {schedule.days}
                    </span>
                    <div className="text-right">
                      <span className="font-mono text-[#12231c] dark:text-[#f7f5f0] font-normal">
                        {schedule.hours}
                      </span>
                      <span className="block text-[11px] text-[#728379] dark:text-[#88968c]">
                        {schedule.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact note */}
            <div className="text-xs text-[#526359] dark:text-[#9ea89f] font-light flex items-center gap-2">
              <Phone size={14} className="text-[#c58253]" />
              <span>Dúvidas de acesso e recepção de eventos:</span>
              <a href="tel:1132894410" className="text-[#c58253] hover:underline font-mono">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Visual Map Representation (7 cols) - Bespoke Architectural Vector */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#c58253]/40 shadow-2xl bg-[#0e1913] text-white p-6 sm:p-8 min-h-[440px] flex flex-col justify-between">
              {/* Architectural Grid & Streets Visual Representation */}
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#c58253_1px,transparent_1px),linear-gradient(to_bottom,#c58253_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

              {/* Vector Street Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal main avenue */}
                <line x1="0" y1="42%" x2="100%" y2="42%" stroke="#c58253" strokeWidth="8" strokeOpacity="0.4" />
                <line x1="0" y1="42%" x2="100%" y2="42%" stroke="#f7f5f0" strokeWidth="1" strokeDasharray="6 6" />

                {/* Diagonal street */}
                <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#c58253" strokeWidth="6" strokeOpacity="0.3" />

                {/* Cross street */}
                <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#c58253" strokeWidth="5" strokeOpacity="0.3" />

                {/* Park green zone representation */}
                <rect x="8%" y="58%" width="32%" height="34%" fill="#1a382c" rx="8" opacity="0.6" />
                <rect x="70%" y="10%" width="22%" height="24%" fill="#1a382c" rx="8" opacity="0.5" />
              </svg>

              {/* Top Map HUD Bar */}
              <div className="relative z-10 flex items-center justify-between text-xs">
                <div className="bg-[#12231c]/90 border border-[#c58253]/40 px-3 py-1.5 rounded-md backdrop-blur-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="uppercase tracking-widest text-[#e4a77d] font-semibold text-[10px]">
                    Jardim Aurora · Zona Sul
                  </span>
                </div>

                <div className="bg-[#12231c]/90 border border-[#c58253]/40 px-3 py-1.5 rounded-md backdrop-blur-sm text-[11px] text-[#ccd6ce]">
                  Metrô Aurora (350m)
                </div>
              </div>

              {/* Central Map Pin at #184 */}
              <div className="relative z-10 my-auto text-center py-10">
                <div className="inline-flex flex-col items-center">
                  {/* Glowing pulsing pin */}
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-[#c58253]/30 animate-ping" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9e5b2f] via-[#c58253] to-[#e4a77d] text-white flex items-center justify-center shadow-xl border-2 border-white">
                      <MapPin size={24} />
                    </div>
                  </div>

                  {/* Pin Label Banner */}
                  <div className="mt-3 px-4 py-2 bg-[#0a140f]/95 border border-[#c58253] rounded-lg shadow-2xl backdrop-blur-md">
                    <span className="font-serif text-lg text-white font-medium block">
                      ORIGEM
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#e4a77d] block font-light">
                      Rua das Palmeiras, 184
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Street Indicators */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#aab6ad] pt-4 border-t border-[#c58253]/25 bg-[#0a140f]/80 p-3 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Navigation size={14} className="text-[#c58253]" />
                  <span>Acesso facilitado pela Alameda dos Ipês</span>
                </div>
                <span className="italic font-serif text-[#e4a77d]">
                  Bairro arborizado & tranquilo
                </span>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
