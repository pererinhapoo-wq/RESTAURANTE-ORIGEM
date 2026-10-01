import React from 'react';
import { ASSET_IMAGES } from '../data/restaurantData';
import { Award, Compass, HeartHandshake } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section
      id="cozinha"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unique Asymmetric Layout for Chef Helena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait with Architectural Stature (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative stone / copper background backplate */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#eae4d5] dark:bg-[#182920] border border-[#c58253]/30 rounded-lg -z-10" />

              <div className="relative overflow-hidden rounded-lg shadow-2xl border border-[#c58253]/35">
                <img
                  src={ASSET_IMAGES.chefHelena}
                  alt="Chef Helena Duarte na cozinha do restaurante ORIGEM"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-top filter contrast-[1.03]"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#e4a77d] font-semibold block mb-1">
                    Chef Executiva & Fundadora
                  </span>
                  <p className="font-serif text-2xl font-light tracking-wide text-[#f7f5f0]">
                    Helena Duarte
                  </p>
                </div>
              </div>

              {/* Minimalist Floating Accolade */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#12231c] text-[#f7f5f0] border border-[#c58253]/40 p-4 rounded-md shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c58253]/20 flex items-center justify-center text-[#e4a77d]">
                  <Award size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#e4a77d] font-semibold">
                    Reconhecimento
                  </span>
                  <span className="font-serif text-sm tracking-wide text-white">
                    Chef Revelação do Ano 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography, Philosophy & Sign-Off (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#c58253]" />
                Nossa Cozinha & Liderança
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide leading-tight">
                Helena Duarte
              </h2>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#63746a] dark:text-[#97a398]">
                Pesquisa territorial, rigor técnico e memória afetiva
              </p>
            </div>

            {/* Short Biography */}
            <div className="space-y-4 text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed">
              <p>
                Formada com honras pela École Ferrandi em Paris e com passagens formativas por cozinhas de vanguarda na Europa e na Amazônia paraense, Helena Duarte dedicou os últimos dez anos a decifrar a biodiversidade gastronômica brasileira.
              </p>
              <p>
                Ao retornar para São Paulo, fundou o <strong className="text-[#12231c] dark:text-[#f7f5f0] font-normal">ORIGEM</strong> como um ateliê gastronômico vivo: um espaço onde técnicas clássicas de alta precisão servem exclusivamente para realçar a autenticidade e a pureza de tubérculos nativos, pescados costeiros e fermentados ancestrais.
              </p>
            </div>

            {/* Culinary Philosophy - Distinct Editorial Pull Quote */}
            <div className="relative p-6 sm:p-8 bg-[#eae4d5]/50 dark:bg-[#15241d] border-l-2 border-[#c58253] rounded-r-lg">
              <span className="font-serif text-4xl sm:text-5xl text-[#c58253] absolute -top-4 left-4 select-none opacity-40">
                “
              </span>
              <blockquote className="font-serif text-lg sm:text-xl text-[#1b2b23] dark:text-[#ece6d9] italic font-light leading-relaxed pt-2">
                A cozinha autoral brasileira não é sobre exotismo, é sobre verdade. Quando respeitamos o tempo da terra e o saber de quem cultiva, cada prato se torna um elo vivo entre a floresta, o litoral e o paladar contemporâneo.
              </blockquote>
              <div className="mt-4 pt-3 border-t border-[#c58253]/20 flex items-center justify-between text-xs tracking-wider uppercase text-[#c58253]">
                <span>— Filosofia Culinária</span>
                <span className="font-serif italic capitalize text-sm text-[#5a6a60] dark:text-[#9ea89f]">Helena Duarte</span>
              </div>
            </div>

            {/* Methodology Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Compass size={18} className="text-[#c58253] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#12231c] dark:text-[#f7f5f0] block">
                    Expedições de Campo
                  </span>
                  <span className="text-xs text-[#526359] dark:text-[#9ba79d] font-light">
                    Visitas trimestrais a comunidades ribeirinhas e pequenos produtores.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake size={18} className="text-[#c58253] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#12231c] dark:text-[#f7f5f0] block">
                    Brigada de Vanguarda
                  </span>
                  <span className="text-xs text-[#526359] dark:text-[#9ba79d] font-light">
                    Cozinheiros treinados continuamente em fermentação e cocção lenta.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
