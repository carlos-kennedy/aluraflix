import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/RecentVideosBanner.tsx
import { useEffect, useState } from 'react';
import './Banner.css';
const RecentVideosBanner = ({ recentVideos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    useEffect(() => {
        if (recentVideos.length === 0)
            return;
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % recentVideos.length);
        }, 12000);
        return () => clearInterval(interval);
    }, [recentVideos]);
    if (recentVideos.length === 0) {
        return _jsx("p", { className: "no-videos", children: "Nenhum v\u00EDdeo recente dispon\u00EDvel." });
    }
    const currentVideo = recentVideos[currentVideoIndex];
    const getCategoryBackgroundClass = (category) => {
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
    const getCategoryEffectClass = (category) => {
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
    return (_jsx("div", { className: "recent-videos-banner", children: _jsx("div", { className: "banner-item", style: {
                backgroundImage: `url(${currentVideo.thumbnail})`,
            }, children: _jsxs("div", { className: "wrapper-banner", children: [_jsx("div", { className: "card-img", children: _jsx("a", { className: getCategoryEffectClass(currentVideo.category), href: currentVideo.videoUrl, target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: currentVideo.thumbnail, alt: currentVideo.title, className: "banner-image" }) }) }), _jsxs("div", { className: "banner-text", children: [_jsx("h3", { className: getCategoryBackgroundClass(currentVideo.category), children: currentVideo.category }), _jsx("h2", { children: currentVideo.title }), _jsx("p", { children: currentVideo.description })] })] }) }) }));
};
export default RecentVideosBanner;
