
import React, { useState } from 'react';
import { MessageCircle, Clock, Send, Image, Smile } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const TikAfriqueComments = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Fatou Diop",
      time: "il y a 5 min",
      reactions: { like: 8, love: 4, total: 12 },
      text: "Incroyable ! J'ai déjà gagné 50 000 FCFA en 2 semaines avec TikAfrique. L'IA génère des contenus vraiment viraux ! 🔥",
      verified: true,
      userReaction: null
    },
    {
      id: 2,
      name: "Mohamed Traoré",
      time: "il y a 18 min",
      reactions: { like: 15, love: 9, total: 24 },
      text: "L'application est géniale ! La fonction d'estimation de revenus m'a aidé à planifier ma stratégie. Mes vues ont explosé ! 📈",
      verified: true,
      userReaction: null
    },
    {
      id: 3,
      name: "Aisha Kone",
      time: "il y a 45 min",
      reactions: { like: 12, love: 6, total: 18 },
      text: "Le pack de 1000 clips viraux est une mine d'or ! Plus jamais en panne d'inspiration. Merci TikAfrique ! 💎",
      verified: true,
      userReaction: null
    },
    {
      id: 4,
      name: "Kwame Asante",
      time: "il y a 1 h",
      reactions: { like: 20, love: 11, total: 31 },
      text: "PayPal configuré grâce au guide ! Je reçois enfin mes paiements en Afrique. Cette app change tout ! 🙌",
      verified: true,
      userReaction: null
    },
    {
      id: 5,
      name: "Aminata Ba",
      time: "il y a 2 h",
      reactions: { like: 10, love: 5, total: 15 },
      text: "L'analyse de compte concurrent m'a permis de comprendre leurs stratégies. Mes followers augmentent chaque jour ! 📊",
      verified: true,
      userReaction: null
    },
    {
      id: 6,
      name: "Ibrahim Ouedraogo",
      time: "il y a 3 h",
      reactions: { like: 18, love: 10, total: 28 },
      text: "4990 FCFA pour un accès à vie ? C'est donné ! J'ai déjà rentabilisé avec ma première vidéo virale 🚀",
      verified: true,
      userReaction: null
    }
  ]);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        name: "Vous",
        time: "à l'instant",
        reactions: { like: 0, love: 0, total: 0 },
        text: newComment,
        verified: false,
        userReaction: null
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const addReaction = (commentId: number, reactionType: 'like' | 'love') => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const newReactions = { ...comment.reactions };
        
        // Remove previous reaction if exists
        if (comment.userReaction) {
          newReactions[comment.userReaction]--;
          newReactions.total--;
        }
        
        // Add new reaction if different from current
        if (comment.userReaction !== reactionType) {
          newReactions[reactionType]++;
          newReactions.total++;
          return {
            ...comment,
            reactions: newReactions,
            userReaction: reactionType
          };
        } else {
          // Remove reaction if clicking the same one
          return {
            ...comment,
            reactions: newReactions,
            userReaction: null
          };
        }
      }
      return comment;
    }));
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Témoignages de nos <span className="text-purple-600">utilisateurs</span>
          </h2>
          <p className="text-lg text-gray-600">
            Rejoignez les milliers d'Africains qui gagnent déjà avec TikTok
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">{comments.length} témoignages</span>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">V</span>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-2xl px-4 py-2 hover:bg-gray-50 transition-colors">
                  <Textarea
                    placeholder="Partagez votre expérience avec TikAfrique..."
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
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {comment.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-gray-900 hover:underline cursor-pointer">
                          {comment.name}
                        </h4>
                        {comment.verified && (
                          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
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
                        onClick={() => addReaction(comment.id, 'like')}
                        className={`flex items-center gap-1 text-xs font-semibold hover:underline transition-colors ${
                          comment.userReaction === 'like' ? 'text-blue-500' : 'text-gray-500'
                        }`}
                      >
                        👍 J'aime
                      </button>
                      <button 
                        onClick={() => addReaction(comment.id, 'love')}
                        className={`flex items-center gap-1 text-xs font-semibold hover:underline transition-colors ${
                          comment.userReaction === 'love' ? 'text-red-500' : 'text-gray-500'
                        }`}
                      >
                        ❤️ J'adore
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
                    
                    {comment.reactions.total > 0 && (
                      <div className="flex items-center gap-1 mt-1 ml-4">
                        <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 py-0.5 text-xs shadow-sm">
                          {comment.reactions.like > 0 && <span className="mr-1">👍</span>}
                          {comment.reactions.love > 0 && <span className="mr-1">❤️</span>}
                          <span className="text-gray-600">{comment.reactions.total}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueComments;
