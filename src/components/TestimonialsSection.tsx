
import React from 'react';
import { MessageCircle, ThumbsUp, Clock } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amadou Diallo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      time: "il y a 12 min",
      likes: 8,
      text: "Les gars, c'est dingue ! J'ai testé cette recette et les résultats sont incroyables. Ma confiance en moi a explosé et les femmes me remarquent beaucoup plus maintenant. Je la recommande à 100% !",
      verified: true
    },
    {
      id: 2,
      name: "Koffi Mensah",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      time: "il y a 1 h",
      likes: 15,
      text: "Franchement, j'étais sceptique au début mais cette recette m'a vraiment changé la vie. Mon charisme naturel s'est développé et j'ai enfin trouvé l'amour de ma vie grâce à ça !",
      verified: true
    },
    {
      id: 3,
      name: "Ibrahim Sow",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face",
      time: "il y a 2 h",
      likes: 22,
      text: "Mes amis me demandent tous mon secret maintenant ! Depuis que j'utilise cette recette naturelle, les femmes sont plus attirées par moi. Le parfum est subtil et très agréable.",
      verified: true
    },
    {
      id: 4,
      name: "Moussa Traoré",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      time: "il y a 3 h",
      likes: 18,
      text: "Cette recette ancestrale fonctionne vraiment ! Ma femme me trouve plus séduisant et notre relation s'est énormément améliorée. Merci pour ce secret !",
      verified: true
    },
    {
      id: 5,
      name: "Ousmane Baldé",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=60&h=60&fit=crop&crop=face",
      time: "il y a 4 h",
      likes: 12,
      text: "Les plantes mystiques dont vous parlez sont vraiment puissantes. J'ai senti la différence dès la première application. Mon aura s'est transformée !",
      verified: true
    },
    {
      id: 6,
      name: "Seydou Camara",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
      time: "il y a 5 h",
      likes: 25,
      text: "Je recommande cette recette à tous mes frères ! C'est du 100% naturel et ça marche vraiment. Les connexions que je crée maintenant sont beaucoup plus profondes.",
      verified: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Ce que disent nos <span className="text-seduction-600">clients satisfaits</span>
          </h2>
          <p className="text-xl text-gray-600">
            Des milliers d'hommes ont déjà transformé leur vie
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900">
              <strong>47 sur 2,847 commentaires</strong>
            </h3>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl p-4 mb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-blue-600 hover:underline cursor-pointer">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-800 leading-relaxed">{testimonial.text}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 ml-4">
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors font-semibold">
                      <ThumbsUp className="w-4 h-4" />
                      J'aime
                    </button>
                    <span>·</span>
                    <button className="hover:text-blue-500 transition-colors font-semibold">
                      Répondre
                    </button>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {testimonial.time}
                    </div>
                  </div>
                  
                  {testimonial.likes > 0 && (
                    <div className="flex items-center gap-2 mt-2 ml-4">
                      <div className="flex items-center bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {testimonial.likes}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 font-medium">
              Les commentaires sont fermés pour cette publication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
