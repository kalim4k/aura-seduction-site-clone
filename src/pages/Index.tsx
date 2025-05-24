
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductDetails from '../components/ProductDetails';
import TestimonialsSection from '../components/TestimonialsSection';
import PurchaseSection from '../components/PurchaseSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-seduction-50 via-white to-gold-50">
      <HeroSection />
      <ProductDetails />
      <TestimonialsSection />
      <PurchaseSection />
    </div>
  );
};

export default Index;
