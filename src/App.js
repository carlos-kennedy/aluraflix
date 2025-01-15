import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NovoVideo from './pages/NovoVideo';
function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const loadVideos = async () => {
            try {
                const response = await fetch('http://localhost:3001/videos');
                if (!response.ok) {
                    throw new Error('Erro ao carregar vídeos');
                }
                const data = await response.json();
                setVideos(data);
                console.log('Vídeos carregados:', data);
            }
            catch (error) {
                console.error('Erro ao carregar vídeos:', error);
            }
        };
        loadVideos();
    }, []);
    const featuredVideos = videos.filter((video) => video.isFeatured);
    const recentVideos = [...videos]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);
    return (_jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(Header, { featuredVideos: featuredVideos, recentVideos: recentVideos }), _jsx(Navbar, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/novo-video", element: _jsx(NovoVideo, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
