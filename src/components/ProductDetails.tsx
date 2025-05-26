
import React from 'react';
import { Sparkles, Heart, Users, Zap, Leaf, Shield } from 'lucide-react';

const ProductDetails = () => {
  const benefits = [{
    icon: <Zap className="w-6 h-6" />,
    title: "Renforce votre charisme naturel",
    description: "Développe votre magnétisme personnel de façon authentique"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "💪 Boost la confiance en soi",
    description: "Augmente votre assurance et votre présence naturelle"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Favorise les connexions profondes",
    description: "Crée des liens authentiques et durables avec les femmes"
  }, {
    icon: <Sparkles className="w-6 h-6" />,
    title: "✨ Parfum subtil et captivant",
    description: "Une fragrance naturelle qui attire et séduit en douceur"
  }];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Les Bienfaits du Parfum de Séduction
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center text-seduction-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
