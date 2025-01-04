// src/components/RecentVideosBanner.tsx
import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Video } from '../types/video';

interface RecentVideosBannerProps {
  recentVideos: Video[];
}

const RecentVideosBanner: React.FC<RecentVideosBannerProps> = ({ recentVideos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (recentVideos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % recentVideos.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [recentVideos]);

  if (recentVideos.length === 0) {
    return <p className="no-videos">Nenhum vídeo recente disponível.</p>;
  }

  const currentVideo = recentVideos[currentVideoIndex];

  const getCategoryBackgroundClass = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'front-end-bg';
      case 'Backend':
        return 'back-end-bg';
      case 'Mobile':
        return 'mobile-bg';
      default:
        return '';
    }
  };

  const getCategoryEffectClass = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'front-end-effect-card';
      case 'Backend':
        return 'back-end-effect-card';
      case 'Mobile':
        return 'mobile-effect-card';
      default:
        return '';
    }
  };

  return (
    <div className="recent-videos-banner">
      <div
        className="banner-item"
        style={{
          backgroundImage: `url(${currentVideo.thumbnail})`,
        }}
      >
        <div className="wrapper-banner">
          <div className="card-img">
            <a
              className={getCategoryEffectClass(currentVideo.category)}
              href={currentVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                className="banner-image"
              />
            </a>
          </div>

          <div className="banner-text">
            <h3 className={getCategoryBackgroundClass(currentVideo.category)}>
              {currentVideo.category}
            </h3>
            <h2>{currentVideo.title}</h2>
            <p>{currentVideo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentVideosBanner;
