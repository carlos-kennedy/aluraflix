// src/components/Banner.tsx
import React from 'react';
import { Video } from '../types/video'; // Certifique-se de que o caminho está correto

interface BannerProps {
  featuredVideos: Video[]; // Recebe os vídeos em destaque como prop
}

const Banner: React.FC<BannerProps> = ({ featuredVideos }) => {
  if (featuredVideos.length === 0) {
    return <div></div>; // Mensagem se não houver vídeos em destaque
  }

  return (
    <div className="banner">
      {featuredVideos.map((video) => (
        <div key={video.id} className="banner-item">
          <img src={video.thumbnail} alt={video.title} className="banner-thumbnail" />
          <div className="banner-info">
            <h3>{video.title}</h3>
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              Ver vídeo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;