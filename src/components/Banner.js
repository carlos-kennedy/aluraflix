import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Banner = ({ featuredVideos }) => {
    if (featuredVideos.length === 0) {
        return null;
    }
    return (_jsx("div", { className: "banner", children: featuredVideos.map((video) => (_jsx("div", { className: "banner-item", children: _jsxs("div", { className: "banner-info", children: [_jsx("h2", { children: video.category }), _jsx("h3", { children: video.title })] }) }, video.id))) }));
};
export default Banner;
