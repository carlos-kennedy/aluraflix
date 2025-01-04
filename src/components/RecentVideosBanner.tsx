// src/components/RecentVideosBanner.tsx
import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Video } from '../types/video'; // Certifique-se de que o caminho está correto

interface RecentVideosBannerProps {
  recentVideos: Video[]; // Lista de vídeos recentes
}

const RecentVideosBanner: React.FC<RecentVideosBannerProps> = ({ recentVideos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (recentVideos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % recentVideos.length);
    }, 12000); // 12000 ms = 12 segundos (ajustado para testes)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [recentVideos]);

  if (recentVideos.length === 0) {
    return <p className="no-videos">Nenhum vídeo recente disponível.</p>; // Mensagem se não houver vídeos
  }

  const currentVideo = recentVideos[currentVideoIndex];

  // Função para definir a classe de fundo com base na categoria
  const getCategoryBackgroundClass = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'front-end-bg'; // Classe para Front-End (azul)
      case 'Backend':
        return 'back-end-bg'; // Classe para Back-End (verde)
      case 'Mobile':
        return 'mobile-bg'; // Classe para Mobile (amarelo)
      default:
        return '';
    }
  };

    const getCategoryEffectClass = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'front-end-effect-card'; // Classe para Front-End (azul)
      case 'Backend':
        return 'back-end-effect-card'; // Classe para Back-End (verde)
      case 'Mobile':
        return 'mobile-effect-card'; // Classe para Mobile (amarelo)
      default:
        return '';
    }
  };

  return (
    <div className="recent-videos-banner">
      <div
        className="banner-item"
        style={{
          backgroundImage: `url(${currentVideo.thumbnail})`, // Define a imagem de fundo
        }}
      >
        <div className="wrapper-banner">
          <div className={`card-img `}>
            <a className={`${getCategoryEffectClass(currentVideo.category)}`} href={currentVideo.videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="banner-image"
          />
          
            </a>
          </div>

          <div className="banner-text">
            <h3 className={`${getCategoryBackgroundClass(currentVideo.category)}`}>
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
