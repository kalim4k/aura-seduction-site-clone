
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductDetails from '../components/ProductDetails';
import TestimonialsSection from '../components/TestimonialsSection';
import PurchaseSection from '../components/PurchaseSection';
import { ShoppingCart } from 'lucide-react';

const Index = () => {
  const handlePurchase = () => {
    window.open('https://quhyhlse.mychariow.com/prd_0dbtyr/checkout', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-seduction-50 via-white to-gold-50">
      <HeroSection />
      <ProductDetails />
      
      {/* Bouton d'achat avant les témoignages */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handlePurchase}
            className="group relative bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-glow"
          >
            <div className="flex items-center justify-center gap-3">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              <span>ACHETER MAINTENANT</span>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      <TestimonialsSection />
      <PurchaseSection />
    </div>
  );
};

export default Index;
