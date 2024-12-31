// src/App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NovoVideo from './pages/NovoVideo';
import { Video } from './types/video'; // Certifique-se de que o caminho está correto

// Componente App
function App() {
  const [videos, setVideos] = useState<Video[]>([]); // Use o tipo Video

  // Carrega os vídeos do servidor
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        if (!response.ok) {
          throw new Error('Erro ao carregar vídeos');
        }
        const data = await response.json();
        setVideos(data);
        console.log('Vídeos carregados:', data); // Verifique os dados carregados
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
      }
    };

    loadVideos();
  }, []);

  // Filtra vídeos da categoria "Destaque"
  const featuredVideos = videos.filter((video) => video.isFeatured); // Certifique-se de que isFeatured está correto

  // Adicione um log para verificar os vídeos em destaque
  console.log('Vídeos em destaque:', featuredVideos); // Verifique os vídeos em destaque

  // Filtra vídeos recentes (por exemplo, os 5 mais recentes)
  const recentVideos = [...videos]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <Router>
      <div className="app">
        <Navbar /> {/* Aqui você deve usar o Navbar */}
        <Header featuredVideos={featuredVideos} recentVideos={recentVideos} /> {/* Passa os vídeos em destaque e recentes para o Header */}
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