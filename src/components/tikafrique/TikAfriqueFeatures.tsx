
import React from 'react';
import { Smartphone, Calculator, Lightbulb, Image, Music, BarChart3, MessageCircle, Gift, CreditCard, Video, Scissors, Mic } from 'lucide-react';

const TikAfriqueFeatures = () => {
  const features = [{
    icon: <Smartphone className="w-6 h-6" />,
    title: "Connexion TikTok",
    description: "Connectez facilement votre compte TikTok"
  }, {
    icon: <Calculator className="w-6 h-6" />,
    title: "Calcul de Revenus",
    description: "Estimation précise de vos gains potentiels"
  }, {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Génération d'Idées",
    description: "Scripts, métadonnées et idées de vidéos IA"
  }, {
    icon: <Image className="w-6 h-6" />,
    title: "Génération d'Images",
    description: "Créez des visuels accrocheurs avec l'IA"
  }, {
    icon: <Music className="w-6 h-6" />,
    title: "Sons Tendances",
    description: "Accédez aux sons viraux et challenges"
  }, {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analyse de Comptes",
    description: "Analysez les performances et tendances"
  }, {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Chat & Entraide",
    description: "Communauté et témoignages d'utilisateurs"
  }];

  const bonus = [{
    icon: <Gift className="w-6 h-6" />,
    title: "Ebook Monétisation TikTok",
    description: "Guide complet pour l'Afrique"
  }, {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Création PayPal Afrique",
    description: "Recevez vos paiements facilement"
  }, {
    icon: <Video className="w-6 h-6" />,
    title: "CapCut Pro",
    description: "Abonnement inclus"
  }, {
    icon: <Scissors className="w-6 h-6" />,
    title: "1000 Clips Viraux",
    description: "Pack de contenus tendances"
  }];

  const updates = [{
    icon: <Mic className="w-6 h-6" />,
    title: "Voix de Synthèse",
    description: "Génération vocale IA"
  }, {
    icon: <Video className="w-6 h-6" />,
    title: "Génération Vidéo",
    description: "Créez des vidéos avec l'IA"
  }, {
    icon: <Scissors className="w-6 h-6" />,
    title: "Montage IA",
    description: "Édition automatique"
  }];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Fonctionnalités de TikAfrique
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            🎁 Bonus Inclus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonus.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-orange-600">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            🚀 Mises à Jour Futures
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center text-blue-600 mb-3">
                  {update.icon}
                </div>
                <h4 className="font-semibold mb-2">{update.title}</h4>
                <p className="text-gray-600 text-sm">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueFeatures;
