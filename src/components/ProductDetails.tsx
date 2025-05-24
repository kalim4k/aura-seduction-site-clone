
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Image de couverture */}
        <div className="text-center mb-12">
          <img 
            src="https://celinaroom.com/wp-content/uploads/2025/05/photo_2025-05-24_16-39-13.jpg" 
            alt="Recette naturelle et spirituelle"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Recette naturelle et spirituelle puissante pour <span className="text-gold-600">attirer les femmes</span>
          </h2>
          <div className="text-center mb-8">
            <span className="text-5xl font-bold text-gold-600">6999 FCFA</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Découvrez le <strong>secret ancestral</strong> pour séduire naturellement et <strong>attirer n'importe quelle femme</strong> grâce à cette recette puissante 100% naturelle 🌿. À base de <strong>plantes mystiques et de racines rares</strong> (gingembre, romarin, menthe...), cette formule unique <strong>agit sur votre aura</strong> et réveille votre pouvoir de séduction magnétique ✨.
          </p>
        </div>

        {/* Bienfaits */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Bienfaits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-gold-600">{benefit.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800">{benefit.title}</h4>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mode d'emploi */}
        <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Mode d'emploi :</h3>
          <p className="text-lg text-gray-700">
            Appliquez quelques gouttes avant un rendez-vous, une sortie ou même au quotidien. Laissez les plantes faire leur magie !
          </p>
        </div>

        {/* Stock limité */}
        <div className="text-center">
          <p className="text-xl font-bold text-red-600 animate-pulse">
            🔥 Stock limité - Commandez maintenant et devenez <strong>inoubliable</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
