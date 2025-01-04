// src/components/Header.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import RecentVideosBanner from './RecentVideosBanner';
import { Video } from '../types/video';

interface HeaderProps {
  featuredVideos: Video[];
  recentVideos: Video[];
}

const Header: React.FC<HeaderProps> = ({ featuredVideos, recentVideos }) => {
  const location = useLocation();

  const isNovoVideoPage = location.pathname === '/novo-video';

  return (
    <header>
      <div style={{ display: isNovoVideoPage ? 'none' : 'block' }}>
        <Banner featuredVideos={featuredVideos} />
        <RecentVideosBanner recentVideos={recentVideos} />
      </div>
    </header>
  );
};

export default Header;
