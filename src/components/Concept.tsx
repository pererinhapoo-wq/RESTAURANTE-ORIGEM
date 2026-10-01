import React from 'react';
import { ASSET_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { Leaf, Flame, Clock } from 'lucide-react';

export const Concept: React.FC = () => {
  return (
    <section
      id="conceito"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#c58253]" />
              Conceito & Essência
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide leading-tight">
              A alma de uma cozinha viva
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-[#596a60] dark:text-[#9faaa0] max-w-xs md:text-right">
            Ingredientes que guardam memórias territoriais de Norte a Sul do Brasil
          </p>
        </div>

        {/* Editorial Lead Statement - Not a standard card */}
        <div className="relative mb-20 lg:mb-28">
          <div className="border-t border-b border-[#c58253]/30 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#12231c] dark:text-[#f7f5f0] font-light leading-relaxed italic">
                “{RESTAURANT_INFO.concept}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.22em] text-[#c58253] font-medium">
                <span className="w-10 h-[1px] bg-[#c58253]" />
                <span>Manifesto ORIGEM</span>
                <span className="w-10 h-[1px] bg-[#c58253]" />
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition with Image & Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image visual with natural slate & ingredients (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-xl border border-[#c58253]/30">
              <img
                src={ASSET_IMAGES.ingredients}
                alt="Ingredientes nativos brasileiros dispostos em pedra ardósia natural"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 text-white">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#e4a77d] block mb-1">
                  Mapeamento de Biomas
                </span>
                <p className="font-serif text-sm italic text-[#efe9dd]">
                  Mandioca brava fermentada, castanha-de-baru, urucum colhido à mão e pimentas nativas.
                </p>
              </div>
            </div>

            {/* Overlapping natural stone aesthetic accent */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#eae4d5] dark:bg-[#192b22] border border-[#c58253]/40 p-4 rounded shadow-lg max-w-[220px]">
              <span className="block text-[10px] uppercase tracking-widest text-[#c58253] font-bold">Origem Direta</span>
              <p className="text-xs text-[#2b3a32] dark:text-[#d3cdbe] mt-1 font-light leading-snug">
                100% dos nossos pescados vêm de pesca artesanal sustentável da costa brasileira.
              </p>
            </div>
          </div>

          {/* Pillars List - Pure Editorial Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
            {/* Pillar 01 */}
            <div className="group border-b border-[#c58253]/20 pb-8 transition-colors">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12231c] dark:text-[#f7f5f0] font-normal group-hover:text-[#c58253] transition-colors">
                  01. Conexão com os Produtores
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#c58253] font-medium flex items-center gap-1">
                  <Leaf size={14} />
                  Biomas
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed">
                Trabalhamos em diálogo constante com cooperativas de pequenos agricultores, ribeirinhos e comunidades extrativistas. Da castanha-do-pará fresca colhida no Pará ao queijo artesanal da Serra da Canastra, cada prato carrega a assinatura de quem vive da terra.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="group border-b border-[#c58253]/20 pb-8 transition-colors">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12231c] dark:text-[#f7f5f0] font-normal group-hover:text-[#c58253] transition-colors">
                  02. O Fogo, a Brasa e a Fermentação
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#c58253] font-medium flex items-center gap-1">
                  <Flame size={14} />
                  Técnica
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed">
                Aliamos a precisão cirúrgica de técnicas contemporâneas — cocções a vácuo em baixa temperatura, emulsões aeradas e caldos translúcidos — à ancestralidade do fogo de brasa e da fermentação de tubérculos nativos.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="group pb-2 transition-colors">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12231c] dark:text-[#f7f5f0] font-normal group-hover:text-[#c58253] transition-colors">
                  03. Sazonalidade & Ciclos Naturais
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#c58253] font-medium flex items-center gap-1">
                  <Clock size={14} />
                  Tempo
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed">
                Não forçamos a natureza a se curvar ao calendário humano. Quando a safra de pequi termina ou o robalo dá lugar à cavala fresca, nosso cardápio se transforma organicamente para honrar o momento exato de cada ingrediente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
