
import React from 'react';
import { 
  Smartphone, 
  Calculator, 
  Lightbulb, 
  Image, 
  Music, 
  BarChart3,
  MessageCircle,
  Gift,
  CreditCard,
  Video,
  Scissors,
  Mic
} from 'lucide-react';

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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Fonctionnalités principales */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fonctionnalités de l'Application
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce dont vous avez besoin pour réussir sur TikTok
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bonus inclus */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Bonus Inclus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonus.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl mb-4 inline-block">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mises à jour futures */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mises à Jour Futures Incluses
          </h2>
          <p className="text-lg text-gray-600">
            Accès gratuit à toutes les nouvelles fonctionnalités
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl border-2 border-dashed border-purple-300">
              <div className="text-purple-600 mb-4">{update.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
              <p className="text-gray-600">{update.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-200 text-purple-800 text-sm rounded-full">
                Bientôt disponible
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueFeatures;
