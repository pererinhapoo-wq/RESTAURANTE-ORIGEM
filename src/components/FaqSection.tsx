import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/restaurantData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 relative transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center justify-center gap-2">
            <HelpCircle size={14} />
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide">
            Informações sobre a Visita
          </h2>
          <p className="text-sm sm:text-base text-[#526359] dark:text-[#a0aca1] font-light max-w-lg mx-auto">
            Tudo o que você precisa saber para desfrutar da sua experiência gastronômica com total tranquilidade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#c58253]/25 rounded-xl overflow-hidden bg-[#eae4d5]/30 dark:bg-[#12231c]/60 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c58253]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#12231c] dark:text-[#f7f5f0] font-normal leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full text-[#c58253] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#c58253]/15' : 'bg-transparent'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#46564e] dark:text-[#b4beb6] font-light leading-relaxed border-t border-[#c58253]/15 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
