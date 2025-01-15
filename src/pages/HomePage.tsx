// src/pages/HomePage.tsx
import { useState, useEffect } from "react";
import Categoria from "../components/Categoria";
import "../Modal.css";
import "./HomePage.css";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
}

function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
const loadVideos = async () => {
  try {
    const response = await fetch("https://aluraflix-dk79.vercel.app/api/videos");
    if (!response.ok) {
      throw new Error(`Erro ao carregar vídeos: ${response.statusText}`);
    }
    const data = await response.json();
    setVideos(data);
  } catch (error) {
    console.error("Erro ao carregar vídeos:", error);
    alert("Ocorreu um erro ao carregar os vídeos. Tente novamente mais tarde.");
  }
};

  useEffect(() => {
    loadVideos();
  }, []);

  const videosByCategory = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {} as Record<string, Video[]>);

  const handleEdit = (videoId: number) => {
    const videoToEdit = videos.find((video) => video.id === videoId);
    if (videoToEdit) {
      setCurrentVideo(videoToEdit);
      setModalOpen(true);
      console.log("Editando vídeo:", videoToEdit);
    }
  };

  const handleDelete = async (videoId: number) => {
    try {
      const response = await fetch(`https://aluraflix-dk79.vercel.app/api/videos/${videoId}`, { // Alterado para URL de produção
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao excluir vídeo");
      }
      console.log(`Vídeo com ID ${videoId} excluído.`);
      loadVideos();
    } catch (error) {
      console.error("Erro ao excluir vídeo:", error);
    }
  };

  const handleSaveEdit = async () => {
    if (currentVideo) {
      console.log("Tentando salvar o vídeo:", currentVideo);
      try {
        const response = await fetch(
          `https://aluraflix-dk79.vercel.app/api/videos/${currentVideo.id}`, // Alterado para URL de produção
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(currentVideo),
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao salvar as edições.");
        }

        const updatedVideo = await response.json();
        console.log("Vídeo atualizado:", updatedVideo);

        loadVideos();
        setModalOpen(false);
        setCurrentVideo(null);
      } catch (error) {
        console.error("Erro ao salvar o vídeo:", error);
      }
    }
  };

  const handleChange = (field: keyof Video, value: string) => {
    if (currentVideo) {
      const updatedVideo = { ...currentVideo, [field]: value };
      setCurrentVideo(updatedVideo);
    }
  };

  return (
    <div>
      {Object.keys(videosByCategory).map((category) => (
        <Categoria
          key={category}
          titulo={category}
          videos={videosByCategory[category]}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      {modalOpen && currentVideo && (
        <div className="modal">
          <h2>Editar Card:</h2>
          <form>
            <div>
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                value={currentVideo.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Categoria:</label>
              <select
                id="category"
                value={currentVideo.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
            <div>
              <label htmlFor="thumbnail">Imagem:</label>
              <input
                type="text"
                id="thumbnail"
                value={currentVideo.thumbnail}
                onChange={(e) => handleChange("thumbnail", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="videoUrl">URL do Vídeo:</label>
              <input
                type="text"
                id="videoUrl"
                value={currentVideo.videoUrl}
                onChange={(e) => handleChange("videoUrl", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Descrição:</label>
              <textarea
                id="description"
                value={currentVideo.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>
            <div className="btn-form">
              <button type="button" onClick={handleSaveEdit}>
                Salvar
              </button>
              <button type="button" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default HomePage;
