// src/components/Header.tsx
import React from 'react';
import Banner from './Banner';
import RecentVideosBanner from './RecentVideosBanner'; // Certifique-se de que o caminho está correto
import { Video } from '../types/video'; // Certifique-se de que o caminho está correto

interface HeaderProps {
  featuredVideos: Video[]; // Recebe os vídeos em destaque como prop
  recentVideos: Video[]; // Recebe os vídeos recentes como prop
}

const Header: React.FC<HeaderProps> = ({ featuredVideos, recentVideos }) => {
  return (
    <header>
      <Banner featuredVideos={featuredVideos} /> {/* O Banner está dentro do Header */}
      <RecentVideosBanner recentVideos={recentVideos} /> {/* Exibe o Banner com os vídeos recentes */}
    </header>
  );
};

export default Header;