import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { TitleReveal } from './TitleReveal';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentReview = REVIEWS[activeIndex];

  return (
    <section
      id="avaliacoes"
      className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 border-t border-[#c58253]/15"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        {/* Eyebrow with Title Reveal */}
        <div className="mb-12 sm:mb-16">
          <TitleReveal
            align="center"
            eyebrow={
              <span className="text-xs uppercase tracking-[0.28em] text-[#c58253] font-semibold flex items-center justify-center gap-2">
                <span className="w-6 h-[1px] bg-[#c58253]" />
                Crítica & Reconhecimento
                <span className="w-6 h-[1px] bg-[#c58253]" />
              </span>
            }
            title={
              <h2 className="font-serif text-3xl sm:text-5xl text-[#12231c] dark:text-[#f7f5f0] font-light tracking-wide mt-2">
                Vozes sobre a nossa mesa
              </h2>
            }
          />
        </div>

        {/* Editorial Pull-Quote Frame - Distinct from generic cards */}
        <div className="relative py-12 sm:py-16 px-6 sm:px-12 border-y border-[#c58253]/30 bg-[#eae4d5]/30 dark:bg-[#12231c]/50 rounded-2xl">
          {/* Large decorative quotation mark */}
          <div className="absolute top-6 left-6 text-[#c58253]/25 pointer-events-none select-none">
            <Quote size={54} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Star rating representation */}
            <div className="flex items-center justify-center gap-1 text-[#c58253]">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>

            {/* Main Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#12231c] dark:text-[#f7f5f0] font-light leading-relaxed italic">
              “{currentReview.quote}”
            </blockquote>

            {/* Attribution */}
            <div className="pt-4 border-t border-[#c58253]/20 max-w-sm mx-auto">
              <h4 className="font-serif text-lg text-[#12231c] dark:text-[#f7f5f0] font-medium tracking-wide">
                {currentReview.author}
              </h4>
              <p className="text-xs uppercase tracking-wider text-[#63746a] dark:text-[#9ea89f] mt-0.5">
                {currentReview.role}
              </p>
              {currentReview.publication && (
                <p className="text-xs text-[#c58253] font-medium tracking-wider mt-1">
                  {currentReview.publication} · {currentReview.year}
                </p>
              )}
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto pt-4">
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1))
              }
              className="p-2 text-[#5a6a60] dark:text-[#a0aca1] hover:text-[#c58253] transition-colors rounded-full hover:bg-[#c58253]/10 cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination indicators */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-8 bg-[#c58253]'
                      : 'w-2 bg-[#c58253]/30 hover:bg-[#c58253]/60'
                  }`}
                  aria-label={`Ver avaliação ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0))
              }
              className="p-2 text-[#5a6a60] dark:text-[#a0aca1] hover:text-[#c58253] transition-colors rounded-full hover:bg-[#c58253]/10 cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
