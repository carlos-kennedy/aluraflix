import React from "react";
import { Video } from "../types/video";

interface BannerProps {
  featuredVideos: Video[];
}

const Banner: React.FC<BannerProps> = ({ featuredVideos }) => {
  if (featuredVideos.length === 0) {
    return null;
  }

  return (
    <div className="banner">
      {featuredVideos.map((video) => (
        <div key={video.id} className="banner-item">
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
