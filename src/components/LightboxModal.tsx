import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c58253]"
        aria-label="Fechar visualização"
      >
        <X size={22} />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 border border-white/20 rounded-full transition-all z-50 cursor-pointer"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 border border-white/20 rounded-full transition-all z-50 cursor-pointer"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} />
      </button>

      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#0e1a14] border border-[#c58253]/35 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image view */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#c58253]/25 bg-[#0d1713] text-[#f7f5f0]">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-[0.2em] text-[#e4a77d] font-semibold">
                {item.category}
              </span>
              <span className="text-white/50 tracking-wider">
                {currentIndex + 1} de {items.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-white font-normal leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-[#b4beb6] font-light leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-6 border-t border-[#c58253]/20 flex items-center justify-between text-xs text-[#8f9d93]">
            <span>ORIGEM Gastronomia</span>
            <span className="italic font-serif text-[#e4a77d]">Acervo Fotográfico</span>
          </div>
        </div>
      </div>
    </div>
  );
};
