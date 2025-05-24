
import React from 'react';
import { ShoppingCart, Zap, Shield, Clock, Star, Heart } from 'lucide-react';

const PurchaseSection = () => {
  const handlePurchase = () => {
    window.open('https://quhyhlse.mychariow.com/prd_0dbtyr/checkout', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-seduction-600 via-seduction-500 to-gold-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gold-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-gold-200" />
            <span className="text-gold-200 font-semibold uppercase tracking-wider text-sm animate-pulse">
              ⚡ Stock limité - Commandez maintenant
            </span>
            <Clock className="w-6 h-6 text-gold-200" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Devenez <span className="text-gold-200">irrésistible</span> dès aujourd'hui
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ne laissez pas passer cette opportunité unique de transformer votre pouvoir de séduction naturel
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-gold-200 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">100% Naturel</h3>
              <p className="text-white/80 text-sm">Aucun produit chimique</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-gold-200 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Résultats Rapides</h3>
              <p className="text-white/80 text-sm">Effets dès la 1ère utilisation</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-gold-200 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Satisfaction Garantie</h3>
              <p className="text-white/80 text-sm">Ou remboursé</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-white rounded-2xl px-8 py-4 shadow-xl">
              <div className="text-4xl font-bold text-seduction-600 mr-2">6999</div>
              <div className="text-xl text-gray-600">FCFA</div>
            </div>
            <p className="text-white/80 mt-3">Prix de lancement - Offre limitée</p>
          </div>

          <button
            onClick={handlePurchase}
            className="group relative bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-glow w-full md:w-auto"
          >
            <div className="flex items-center justify-center gap-3">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              <span>ACHETER MAINTENANT</span>
              <Zap className="w-6 h-6 group-hover:animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-white/90">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-300 fill-current" />
                ))}
              </div>
              <span className="font-semibold">Note moyenne : 4.9/5</span>
            </div>
            <p className="text-sm">
              Basé sur plus de 10,000 avis clients vérifiés
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gold-300" />
              <span className="font-semibold">Paiement 100% Sécurisé</span>
            </div>
            <p className="text-sm">
              Vos données sont protégées par un cryptage SSL
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm italic">
            "Rejoignez les milliers d'hommes qui ont déjà transformé leur vie grâce à cette recette ancestrale"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
