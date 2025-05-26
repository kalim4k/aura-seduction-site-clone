
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Check, Lock } from 'lucide-react';

const TikAfriquePurchase = () => {
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);

  // Écouter l'état de completion de la vidéo depuis le localStorage
  useEffect(() => {
    const checkVideoCompletion = () => {
      const completed = localStorage.getItem('tikafrique-video-completed');
      setIsVideoCompleted(completed === 'true');
    };

    checkVideoCompletion();
    
    // Vérifier périodiquement
    const interval = setInterval(checkVideoCompletion, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    if (isVideoCompleted) {
      // TODO: Intégrer le système de paiement
      alert('Redirection vers le paiement... (À intégrer avec Stripe/PayPal)');
    }
  };

  const features = [
    "Application IA complète",
    "Connexion TikTok automatique",
    "Génération de contenu illimitée",
    "Analyse de revenus en temps réel",
    "Pack de 1000 clips viraux",
    "Guide PayPal pour l'Afrique",
    "Abonnement CapCut Pro inclus",
    "Accès à vie aux mises à jour",
    "Support client dédié",
    "Communauté exclusive"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Obtenez TikAfrique Maintenant
        </h2>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ce que vous obtenez :</h3>
              <div className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-8 rounded-xl mb-6">
                <h3 className="text-3xl font-bold mb-2">Prix Spécial</h3>
                <div className="text-5xl font-bold mb-2">4990 FCFA</div>
                <p className="text-lg">Paiement unique - Accès à vie</p>
              </div>
              
              <button
                onClick={handlePurchase}
                disabled={!isVideoCompleted}
                className={`group relative font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform ${
                  isVideoCompleted
                    ? 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-2xl text-white'
                    : 'bg-gray-400 cursor-not-allowed text-gray-200'
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  {isVideoCompleted ? (
                    <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                  ) : (
                    <Lock className="w-6 h-6" />
                  )}
                  <span>
                    {isVideoCompleted ? 'ACHETER MAINTENANT' : 'REGARDEZ LA VIDÉO D\'ABORD'}
                  </span>
                </div>
                {isVideoCompleted && (
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
              
              {!isVideoCompleted && (
                <p className="text-sm text-yellow-300 mt-4">
                  ⚠️ Vous devez regarder la vidéo entièrement pour débloquer l'achat
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">💎 Satisfaction Garantie</h4>
            <p className="text-sm opacity-90">100% satisfait ou remboursé sous 7 jours</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">🔒 Paiement Sécurisé</h4>
            <p className="text-sm opacity-90">Transactions protégées et chiffrées</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">🚀 Accès Immédiat</h4>
            <p className="text-sm opacity-90">Commencez à utiliser TikAfrique instantanément</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikAfriquePurchase;
