import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { InteractiveMenu } from './components/InteractiveMenu';
import { FeaturedDish } from './components/FeaturedDish';
import { ChefSection } from './components/ChefSection';
import { MasonryGallery } from './components/MasonryGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickReserve } from './components/MobileQuickReserve';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('origem_theme');
      if (saved) return saved === 'dark';
      return false; // Default to natural off-white stone editorial aesthetic
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('origem_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('origem_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenReservation = () => {
    const resSection = document.getElementById('reservas');
    if (resSection) {
      resSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-[#0a140f] text-[#f7f5f0]' : 'bg-[#f7f5f0] text-[#1b2b23]'
    }`}>
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenReservation={handleOpenReservation}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* Concept Section */}
        <Concept />

        {/* Interactive Menu Section */}
        <InteractiveMenu />

        {/* Featured Dish "Peixe da Costa" */}
        <FeaturedDish onOpenReservation={handleOpenReservation} />

        {/* Our Kitchen & Chef Helena Duarte */}
        <ChefSection />

        {/* Asymmetrical Masonry Gallery with Lightbox */}
        <MasonryGallery />

        {/* Reviews & Social Proof */}
        <ReviewsSection />

        {/* Reservations Section with Frontend Form & Visual Confirmation */}
        <ReservationSection />

        {/* Location & Architectural Map */}
        <LocationSection />

        {/* Interactive FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Mobile Floating Quick Reserve (under 15% sticky limit) */}
      <MobileQuickReserve onOpenReservation={handleOpenReservation} />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
