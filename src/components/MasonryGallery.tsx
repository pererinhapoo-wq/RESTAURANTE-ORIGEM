import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Camera } from 'lucide-react';

export const MasonryGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Prato', 'Ingrediente', 'Ambiente', 'Cozinha', 'Bar'];

  const filteredItems = activeFilter === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  return (
    <section
      id="galeria"
      className="py-24 sm:py-32 relative transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center gap-2">
              <Camera size={14} />
              Narrativa Visual
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide">
              Galeria da Experiência
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-md uppercase tracking-wider text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#1a2d24] text-white dark:bg-[#c58253] dark:text-white shadow-xs'
                    : 'text-[#5a6a60] dark:text-[#a0aca1] hover:text-[#12231c] dark:hover:text-[#f7f5f0] hover:bg-[#eae4d5]/50 dark:hover:bg-[#1a2d24]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => {
            // Assign varied spans for asymmetric layout
            let colSpan = 'lg:col-span-4';
            let heightClass = 'h-[320px] sm:h-[360px]';

            if (idx === 0) {
              colSpan = 'lg:col-span-8';
              heightClass = 'h-[320px] sm:h-[440px]';
            } else if (idx === 1) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[320px] sm:h-[440px]';
            } else if (idx === 2) {
              colSpan = 'lg:col-span-5';
              heightClass = 'h-[300px] sm:h-[380px]';
            } else if (idx === 3) {
              colSpan = 'lg:col-span-7';
              heightClass = 'h-[300px] sm:h-[380px]';
            } else if (idx === 4) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[320px] sm:h-[380px]';
            } else if (idx === 5) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[320px] sm:h-[380px]';
            } else if (idx === 6) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[320px] sm:h-[380px]';
            }

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative group overflow-hidden rounded-xl cursor-pointer border border-[#c58253]/25 bg-[#0f1b15] shadow-md hover:shadow-xl transition-all duration-300 ${colSpan} ${heightClass}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`Visualizar em tamanho maior: ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-104 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover zoom icon affordance */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/80 group-hover:text-white group-hover:bg-[#c58253] transition-all duration-200">
                  <Maximize2 size={15} />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#e4a77d] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1 mt-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Hint */}
        <p className="mt-8 text-center text-xs text-[#627368] dark:text-[#9ea89f] tracking-wide">
          Clique em qualquer imagem para abrir a visualização em alta definição com detalhes e notas de preparo.
        </p>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
