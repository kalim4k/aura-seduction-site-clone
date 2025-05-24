
import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Clock, Send, Image, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const TestimonialsSection = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Amadou Diallo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      time: "il y a 12 min",
      likes: 8,
      text: "Les gars, c'est dingue ! J'ai testé cette recette et les résultats sont incroyables. Ma confiance en moi a explosé et les femmes me remarquent beaucoup plus maintenant. Je la recommande à 100% !",
      verified: true,
      liked: false
    },
    {
      id: 2,
      name: "Koffi Mensah",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      time: "il y a 1 h",
      likes: 15,
      text: "Franchement, j'étais sceptique au début mais cette recette m'a vraiment changé la vie. Mon charisme naturel s'est développé et j'ai enfin trouvé l'amour de ma vie grâce à ça !",
      verified: true,
      liked: false
    },
    {
      id: 3,
      name: "Ibrahim Sow",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face",
      time: "il y a 2 h",
      likes: 22,
      text: "Mes amis me demandent tous mon secret maintenant ! Depuis que j'utilise cette recette naturelle, les femmes sont plus attirées par moi. Le parfum est subtil et très agréable.",
      verified: true,
      liked: false
    },
    {
      id: 4,
      name: "Moussa Traoré",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      time: "il y a 3 h",
      likes: 18,
      text: "Cette recette ancestrale fonctionne vraiment ! Ma femme me trouve plus séduisant et notre relation s'est énormément améliorée. Merci pour ce secret !",
      verified: true,
      liked: false
    },
    {
      id: 5,
      name: "Ousmane Baldé",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=60&h=60&fit=crop&crop=face",
      time: "il y a 4 h",
      likes: 12,
      text: "Les plantes mystiques dont vous parlez sont vraiment puissantes. J'ai senti la différence dès la première application. Mon aura s'est transformée !",
      verified: true,
      liked: false
    },
    {
      id: 6,
      name: "Seydou Camara",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face",
      time: "il y a 5 h",
      likes: 25,
      text: "Je recommande cette recette à tous mes frères ! C'est du 100% naturel et ça marche vraiment. Les connexions que je crée maintenant sont beaucoup plus profondes.",
      verified: true,
      liked: false
    }
  ]);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "Vous",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face",
        time: "à l'instant",
        likes: 0,
        text: newComment,
        verified: false,
        liked: false
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (commentId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Ce que disent nos <span className="text-seduction-600">clients satisfaits</span>
          </h2>
          <p className="text-lg text-gray-600">
            Des milliers d'hommes ont déjà transformé leur vie
          </p>
        </div>

        {/* Section des commentaires style Facebook */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* En-tête des commentaires */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">{comments.length} commentaires</span>
            </div>
          </div>

          {/* Formulaire pour nouveau commentaire */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face" />
                <AvatarFallback>Vous</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-2xl px-4 py-2 hover:bg-gray-50 transition-colors">
                  <Textarea
                    placeholder="Écrivez un commentaire..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="border-none bg-transparent resize-none text-sm p-0 min-h-[40px] focus-visible:ring-0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmitComment();
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSubmitComment}
                    disabled={!newComment.trim()}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des commentaires */}
          <div className="divide-y divide-gray-100">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.avatar} alt={comment.name} />
                    <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-gray-900 hover:underline cursor-pointer">
                          {comment.name}
                        </h4>
                        {comment.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed">{comment.text}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-1 ml-4">
                      <button 
                        onClick={() => toggleLike(comment.id)}
                        className={`flex items-center gap-1 text-xs font-semibold hover:underline transition-colors ${
                          comment.liked ? 'text-blue-500' : 'text-gray-500'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        J'aime
                      </button>
                      <span className="text-gray-300">·</span>
                      <button className="text-xs font-semibold text-gray-500 hover:underline">
                        Répondre
                      </button>
                      <span className="text-gray-300">·</span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {comment.time}
                      </div>
                    </div>
                    
                    {comment.likes > 0 && (
                      <div className="flex items-center gap-1 mt-1 ml-4">
                        <div className="flex items-center bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">
                          <ThumbsUp className="w-2.5 h-2.5 mr-1" />
                          {comment.likes}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Afficher plus de commentaires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
