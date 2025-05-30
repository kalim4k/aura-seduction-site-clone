
import React from 'react';
import { Smartphone, TrendingUp, DollarSign } from 'lucide-react';

const TikAfriqueHero = () => {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Smartphone className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            TikAfrique
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          L'Application IA Révolutionnaire pour Monétiser TikTok en Afrique
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Génération de Contenu IA</h3>
            <p className="text-gray-600">Scripts, idées vidéos et métadonnées automatiques</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Calcul de Revenus</h3>
            <p className="text-gray-600">Estimation précise de vos gains potentiels</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Analyse Complète</h3>
            <p className="text-gray-600">Tendances, sons viraux et analyse de comptes</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Paiement Unique - Accès à Vie</h2>
          <p className="text-xl mb-2">Seulement <span className="text-4xl font-bold">4990 FCFA</span></p>
          <p className="text-lg opacity-90">Toutes les mises à jour incluses gratuitement</p>
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueHero;
