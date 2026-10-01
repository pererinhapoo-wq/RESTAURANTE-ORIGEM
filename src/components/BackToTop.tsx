import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden sm:flex fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#12231c] dark:bg-[#c58253] text-white hover:bg-[#c58253] dark:hover:bg-[#d69766] border border-[#c58253]/40 shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c58253]"
      title="Voltar ao início"
      aria-label="Voltar ao início da página"
    >
      <ArrowUp size={18} />
    </button>
  );
};
