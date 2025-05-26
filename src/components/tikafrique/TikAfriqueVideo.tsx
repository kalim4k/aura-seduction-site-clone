
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Lock, Unlock } from 'lucide-react';

const TikAfriqueVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const percentage = (currentTime / duration) * 100;
      setWatchedPercentage(percentage);
      
      if (percentage >= 95) {
        setIsVideoCompleted(true);
        localStorage.setItem('tikafrique-video-completed', 'true');
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', () => {
        setIsVideoCompleted(true);
        localStorage.setItem('tikafrique-video-completed', 'true');
      });
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', () => setIsVideoCompleted(true));
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Découvrez TikAfrique en Action
        </h2>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-8">
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster="/placeholder.svg"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="https://orawin.fun/wp-content/uploads/2025/05/video_2025-05-26_17-06-12.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
          
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button
                onClick={handlePlayPause}
                className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transition-colors"
              >
                <Play className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progression de visionnage</span>
            <span className="text-sm text-gray-600">{Math.round(watchedPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${watchedPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
          isVideoCompleted 
            ? 'border-green-400 bg-green-50' 
            : 'border-orange-400 bg-orange-50'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            {isVideoCompleted ? (
              <Unlock className="w-6 h-6 text-green-600" />
            ) : (
              <Lock className="w-6 h-6 text-orange-600" />
            )}
            <h3 className="text-lg font-semibold">
              {isVideoCompleted 
                ? "Félicitations ! Bouton d'achat débloqué" 
                : "Regardez la vidéo entièrement pour débloquer l'achat"
              }
            </h3>
          </div>
          <p className="text-gray-600">
            {isVideoCompleted 
              ? "Vous pouvez maintenant procéder à l'achat de TikAfrique"
              : `Encore ${Math.round(100 - watchedPercentage)}% à regarder`
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default TikAfriqueVideo;
