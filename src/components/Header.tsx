// src/components/Header.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import RecentVideosBanner from './RecentVideosBanner'; // Certifique-se de que o caminho está correto
import { Video } from '../types/video'; // Certifique-se de que o caminho está correto

interface HeaderProps {
  featuredVideos: Video[]; // Recebe os vídeos em destaque como prop
  recentVideos: Video[]; // Recebe os vídeos recentes como prop
}

const Header: React.FC<HeaderProps> = ({ featuredVideos, recentVideos }) => {
  const location = useLocation();

  // Verifica se a rota atual é a página "Novo Vídeo"
  const isNovoVideoPage = location.pathname === '/novo-video';

  return (
    <header>
      {/* Aplica display: none se estiver na página "Novo Vídeo" */}
      <div style={{ display: isNovoVideoPage ? 'none' : 'block' }}>
        <Banner featuredVideos={featuredVideos} /> {/* O Banner está dentro do Header */}
        <RecentVideosBanner recentVideos={recentVideos} /> {/* Exibe o Banner com os vídeos recentes */}
      </div>
    </header>
  );
};

export default Header;
