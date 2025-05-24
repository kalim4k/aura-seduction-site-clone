
import React from 'react';
import { Sparkles, Heart, Users, Zap, Leaf, Shield } from 'lucide-react';

const ProductDetails = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Renforce votre charisme naturel",
      description: "Développe votre magnétisme personnel de façon authentique"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "💪 Boost la confiance en soi",
      description: "Augmente votre assurance et votre présence naturelle"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Favorise les connexions profondes",
      description: "Crée des liens authentiques et durables avec les femmes"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "✨ Parfum subtil et captivant",
      description: "Une fragrance naturelle qui attire et séduit en douceur"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Les <span className="text-seduction-600">bienfaits prouvés</span> de notre recette
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une formule unique qui transforme votre pouvoir de séduction naturel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-seduction-100 hover:border-seduction-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-seduction-500 mb-4 group-hover:text-gold-500 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-seduction-500 to-gold-500 rounded-3xl p-8 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8" />
                <h3 className="text-2xl font-display font-bold">Mode d'emploi</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Appliquez quelques gouttes avant un rendez-vous, une sortie ou même au quotidien. 
                Laissez les plantes faire leur magie !
              </p>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">100% naturel et sans effets secondaires</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-gold-200" />
                <h4 className="text-xl font-bold mb-2">Résultats garantis</h4>
                <p className="text-white/90">
                  Des effets visibles dès la première utilisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
