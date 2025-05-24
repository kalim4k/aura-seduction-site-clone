
import React from 'react';
import { Star, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-seduction-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gold-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-seduction-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-gold-500 fill-current" />
            <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm">
              Secret ancestral révélé
            </span>
            <Star className="w-6 h-6 text-gold-500 fill-current" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-seduction-600">Recette naturelle</span> et spirituelle{' '}
            <span className="text-gold-600">puissante</span> pour{' '}
            <span className="relative">
              attirer les femmes
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-seduction-200 to-gold-200 -rotate-1 rounded"></div>
            </span>
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">Plus de 10 000 hommes conquis</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src="https://celinaroom.com/wp-content/uploads/2025/05/photo_2025-05-24_16-39-13.jpg"
                alt="Recette naturelle pour attirer les femmes"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                ✨ 100% Naturel
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-seduction-100">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-seduction-500" />
                <h2 className="text-2xl font-display font-semibold text-gray-900">
                  Le pouvoir de séduction révélé
                </h2>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Découvrez le <strong className="text-seduction-600">secret ancestral</strong> pour séduire naturellement et{' '}
                <strong className="text-gold-600">attirer n'importe quelle femme</strong> grâce à cette recette puissante 100% naturelle ✨
              </p>
              
              <div className="bg-gradient-to-r from-seduction-50 to-gold-50 rounded-xl p-6 border-l-4 border-seduction-400">
                <p className="text-gray-800 font-medium">
                  À base de <strong className="text-seduction-600">plantes mystiques et de racines rares</strong> (gingembre, romarin, menthe...), 
                  cette formule unique <strong className="text-gold-600">agit sur votre aura</strong> et réveille votre pouvoir de séduction magnétique ✨
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gold-200">
                <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">6999</div>
                <div className="text-gold-600 font-semibold">FCFA</div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-seduction-200">
                <Heart className="w-8 h-8 text-seduction-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Stock</div>
                <div className="text-seduction-600 font-semibold">Limité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
