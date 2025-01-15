import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import NovoVideo from '../pages/NovoVideo';
import { Video } from '../types/video';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos'); // Alterado para URL de produção
        if (!response.ok) {
          throw new Error('Erro ao carregar vídeos');
        }
        const data = await response.json();
        setVideos(data);
        console.log('Vídeos carregados:', data);
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
      }
    };

    loadVideos();
  }, []);

  const featuredVideos = videos.filter((video) => video.isFeatured);

  const recentVideos = [...videos]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <Router>
      <div className="app">
        <Header featuredVideos={featuredVideos} recentVideos={recentVideos} />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novo-video" element={<NovoVideo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
