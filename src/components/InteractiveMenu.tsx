import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory } from '../types';
import { Sparkles, Wine, Search } from 'lucide-react';

interface InteractiveMenuProps {
  onSelectDishForReservation?: (dishName: string) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onSelectDishForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Entradas');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter items based on activeCategory, search query, and selected tag
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        !selectedTag || (item.tags && item.tags.includes(selectedTag));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  // Extract all distinct tags for active category
  const categoryTags = useMemo(() => {
    const currentCategoryItems = MENU_ITEMS.filter((i) => i.category === activeCategory);
    const tagsSet = new Set<string>();
    currentCategoryItems.forEach((item) => {
      item.tags?.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, [activeCategory]);

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 relative transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-[#c58253]" />
            Cardápio Autoral
            <span className="w-6 h-[1px] bg-[#c58253]" />
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide">
            Criações de Época
          </h2>

          <p className="text-sm sm:text-base text-[#526359] dark:text-[#a0aca1] font-light leading-relaxed max-w-xl mx-auto">
            Uma sinfonia entre os biomas do Brasil e o rigor da alta gastronomia. Cada prato é finalizado na hora com ingredientes frescos e manejados conscientemente.
          </p>
        </div>

        {/* Category Filter Navigation Bar */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Scrollable Category Segmented Control */}
          <div className="w-full max-w-4xl overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 p-1.5 bg-[#eae4d5]/60 dark:bg-[#15231c] rounded-xl border border-[#c58253]/25 min-w-max mx-auto">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedTag(null);
                    }}
                    className={`px-4 sm:px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253] ${
                      isActive
                        ? 'bg-[#1a2d24] text-white dark:bg-[#c58253] dark:text-white shadow-sm'
                        : 'text-[#44544b] dark:text-[#c4beaf] hover:text-[#12231c] dark:hover:text-[#f7f5f0] hover:bg-[#ded7c7]/50 dark:hover:bg-[#1d3126]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Search & Subtle Tag Filter */}
          <div className="w-full max-w-4xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-b border-[#c58253]/15 pb-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#728379] dark:text-[#88968c]"
              />
              <input
                type="text"
                placeholder={`Buscar em ${activeCategory}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-transparent border border-[#c58253]/30 rounded-lg text-[#12231c] dark:text-[#f7f5f0] placeholder-[#728379] dark:placeholder-[#88968c] focus:outline-none focus:border-[#c58253] focus:ring-1 focus:ring-[#c58253] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#728379] hover:text-[#c58253]"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Unboxed Metadata Tag filters for active category */}
            {categoryTags.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto text-xs">
                <span className="text-[#728379] dark:text-[#88968c] uppercase tracking-wider text-[11px] shrink-0">
                  Filtro:
                </span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer shrink-0 ${
                    selectedTag === null
                      ? 'bg-[#c58253]/20 text-[#c58253] font-semibold'
                      : 'text-[#5a6a60] dark:text-[#a0aca1] hover:text-[#c58253]'
                  }`}
                >
                  Todos
                </button>
                {categoryTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer shrink-0 ${
                      selectedTag === tag
                        ? 'bg-[#c58253]/20 text-[#c58253] font-semibold'
                        : 'text-[#5a6a60] dark:text-[#a0aca1] hover:text-[#c58253]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu Items List - Refined Editorial Layout with Hairline Dividers */}
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 px-4 border border-dashed border-[#c58253]/30 rounded-xl">
              <p className="font-serif text-xl text-[#3b4c42] dark:text-[#d3ccbe] italic">
                Nenhum prato encontrado com os filtros selecionados.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag(null);
                }}
                className="mt-4 text-xs uppercase tracking-widest text-[#c58253] hover:underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative pb-8 border-b border-[#c58253]/20 transition-all duration-200"
              >
                {/* Top Row: Title, Highlight indicator, and Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#12231c] dark:text-[#f7f5f0] font-medium tracking-wide group-hover:text-[#c58253] transition-colors">
                      {item.name}
                    </h3>

                    {item.highlight && (
                      <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#c58253] font-semibold bg-[#c58253]/15 px-2 py-0.5 rounded">
                        <Sparkles size={11} />
                        Destaque
                      </span>
                    )}
                  </div>

                  {/* Price in Tabular Numerals */}
                  <div className="sm:text-right shrink-0">
                    <span className="font-serif text-xl sm:text-2xl font-light text-[#12231c] dark:text-[#f7f5f0] tabular-nums tracking-wide">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed max-w-3xl mb-3">
                  {item.description}
                </p>

                {/* Unboxed Metadata & Sommelier Pairing */}
                <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-1 text-xs">
                  {/* Tags as Clean Text with Typographic Separator */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex items-center gap-2 text-[#728379] dark:text-[#88968c]">
                      {item.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {/* Sommelier Pairing note */}
                  {item.pairing && (
                    <div className="flex items-center gap-1.5 text-xs text-[#a86539] dark:text-[#e4a77d] italic">
                      <Wine size={13} className="shrink-0" />
                      <span>{item.pairing}</span>
                    </div>
                  )}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Menu Note Footer */}
        <div className="max-w-4xl mx-auto mt-16 text-center pt-8 border-t border-[#c58253]/15">
          <p className="text-xs text-[#526359] dark:text-[#9ea89f] font-light">
            Dispomos também do <span className="font-semibold text-[#12231c] dark:text-[#f7f5f0]">Menu Degustação em 7 Etapas</span> (R$ 380 por pessoa / Harmonização R$ 220), servido exclusivamente para a mesa inteira mediante solicitação no salão.
          </p>
        </div>
      </div>
    </section>
  );
};
