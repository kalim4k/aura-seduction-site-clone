
import React from 'react';
import { Smartphone, Calculator, Lightbulb, Image, Music, BarChart3, MessageCircle, Gift, CreditCard, Video, Scissors, Mic } from 'lucide-react';

const TikAfriqueFeatures = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Connexion TikTok",
      description: "Connectez facilement votre compte TikTok"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Calcul de Revenus",
      description: "Estimation précise de vos gains potentiels"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Génération d'Idées",
      description: "Scripts, métadonnées et idées de vidéos IA"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Génération d'Images",
      description: "Créez des visuels accrocheurs avec l'IA"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Sons Tendances",
      description: "Accédez aux sons viraux et challenges"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analyse de Comptes",
      description: "Analysez les performances et tendances"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat & Entraide",
      description: "Communauté et témoignages d'utilisateurs"
    }
  ];

  const bonus = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Ebook Monétisation TikTok",
      description: "Guide complet pour l'Afrique"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Création PayPal Afrique",
      description: "Recevez vos paiements facilement"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "CapCut Pro",
      description: "Abonnement inclus"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "1000 Clips Viraux",
      description: "Pack de contenus tendances"
    }
  ];

  const updates = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voix de Synthèse",
      description: "Génération vocale IA"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Génération Vidéo",
      description: "Créez des vidéos avec l'IA"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Montage IA",
      description: "Édition automatique"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités <span className="text-purple-600">TikAfrique</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce dont vous avez besoin pour réussir sur TikTok en Afrique
          </p>
        </div>

        {/* Fonctionnalités principales */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Fonctionnalités Principales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <div className="text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus inclus */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Bonus Inclus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonus.map((item, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                <div className="text-green-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mises à jour futures */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Mises à Jour Futures
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-blue-600 mb-4">
                  {update.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {update.title}
                </h4>
                <p className="text-gray-600">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueFeatures;
