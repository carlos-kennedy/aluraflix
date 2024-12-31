// src/components/RecentVideosBanner.tsx
import React, { useEffect, useState } from 'react';
import './Banner.css';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  isFeatured: boolean;
  createdAt: string; // Propriedade para a data de criação
}

interface RecentVideosBannerProps {
  recentVideos: Video[]; // Lista de vídeos recentes
}

const RecentVideosBanner: React.FC<RecentVideosBannerProps> = ({ recentVideos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (recentVideos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % recentVideos.length);
    }, 120000); // 120000 ms = 2 minutos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [recentVideos]);

  if (recentVideos.length === 0) {
    return;
  }

  const currentVideo = recentVideos[currentVideoIndex];

  return (
    <div className="recent-videos-banner">
      <div className="banner-item">
        <img src={currentVideo.thumbnail} alt={currentVideo.title} className="banner-image" />
        <div className="banner-text">
          <h2>{currentVideo.title}</h2>
          <p>{currentVideo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentVideosBanner;