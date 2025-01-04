// src/components/Banner.tsx
import React from 'react';
import { Video } from '../types/video'; // Certifique-se de que o caminho está correto

interface BannerProps {
  featuredVideos: Video[]; // Recebe os vídeos em destaque como prop
}

const Banner: React.FC<BannerProps> = ({ featuredVideos }) => {
  if (featuredVideos.length === 0) {
    return  // Mensagem se não houver vídeos em destaque
  }

  return (
    <div className="banner">
      {featuredVideos.map((video) => (
        <div
          key={video.id}
          className="banner-item"
           // Define a imagem de fundo
        >
          <div className="banner-info">
            <h2>{video.category}</h2>
            <h3>{video.title}</h3>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;