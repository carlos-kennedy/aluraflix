import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import RecentVideosBanner from './RecentVideosBanner';
const Header = ({ featuredVideos, recentVideos }) => {
    const location = useLocation();
    const isNovoVideoPage = location.pathname === '/novo-video';
    return (_jsx("header", { children: _jsxs("div", { style: { display: isNovoVideoPage ? 'none' : 'block' }, children: [_jsx(Banner, { featuredVideos: featuredVideos }), _jsx(RecentVideosBanner, { recentVideos: recentVideos })] }) }));
};
export default Header;
