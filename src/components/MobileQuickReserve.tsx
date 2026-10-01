import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface MobileQuickReserveProps {
  onOpenReservation: () => void;
}

export const MobileQuickReserve: React.FC<MobileQuickReserveProps> = ({ onOpenReservation }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 transition-transform duration-300">
      <div className="bg-[#0e1a14]/95 backdrop-blur-md border border-[#c58253]/50 p-2.5 rounded-xl shadow-2xl flex items-center justify-between gap-3">
        <div className="pl-2">
          <span className="font-serif text-sm text-white font-medium block">
            ORIGEM
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#e4a77d] block">
            14 mesas exclusivas
          </span>
        </div>

        <button
          onClick={onOpenReservation}
          className="px-5 py-2.5 bg-[#c58253] hover:bg-[#d69766] active:bg-[#b26f42] text-white text-xs uppercase tracking-wider font-semibold rounded-lg shadow-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <Calendar size={14} />
          <span>Reservar Mesa</span>
        </button>
      </div>
    </div>
  );
};
