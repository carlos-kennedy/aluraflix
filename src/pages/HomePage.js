import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/HomePage.tsx
import { useState, useEffect } from "react";
import Categoria from "../components/Categoria";
import "../Modal.css";
import "./HomePage.css";
function HomePage() {
    const [videos, setVideos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const loadVideos = async () => {
        try {
            const response = await fetch("http://localhost:3001/videos");
            if (!response.ok) {
                throw new Error("Erro ao carregar vídeos");
            }
            const data = await response.json();
            setVideos(data);
            console.log("Vídeos carregados:", data);
        }
        catch (error) {
            console.error("Erro ao carregar vídeos:", error);
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
    }, {});
    const handleEdit = (videoId) => {
        const videoToEdit = videos.find((video) => video.id === videoId);
        if (videoToEdit) {
            setCurrentVideo(videoToEdit);
            setModalOpen(true);
            console.log("Editando vídeo:", videoToEdit);
        }
    };
    const handleDelete = async (videoId) => {
        try {
            const response = await fetch(`http://localhost:3001/videos/${videoId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Erro ao excluir vídeo");
            }
            console.log(`Vídeo com ID ${videoId} excluído.`);
            loadVideos();
        }
        catch (error) {
            console.error("Erro ao excluir vídeo:", error);
        }
    };
    const handleSaveEdit = async () => {
        if (currentVideo) {
            console.log("Tentando salvar o vídeo:", currentVideo);
            try {
                const response = await fetch(`http://localhost:3001/videos/${currentVideo.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentVideo),
                });
                if (!response.ok) {
                    throw new Error("Erro ao salvar as edições.");
                }
                const updatedVideo = await response.json();
                console.log("Vídeo atualizado:", updatedVideo);
                loadVideos();
                setModalOpen(false);
                setCurrentVideo(null);
            }
            catch (error) {
                console.error("Erro ao salvar o vídeo:", error);
            }
        }
    };
    const handleChange = (field, value) => {
        if (currentVideo) {
            const updatedVideo = { ...currentVideo, [field]: value };
            setCurrentVideo(updatedVideo);
        }
    };
    return (_jsxs("div", { children: [Object.keys(videosByCategory).map((category) => (_jsx(Categoria, { titulo: category, videos: videosByCategory[category], onEdit: handleEdit, onDelete: handleDelete }, category))), modalOpen && currentVideo && (_jsxs("div", { className: "modal", children: [_jsx("h2", { children: "Editar Card:" }), _jsxs("form", { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "title", children: "T\u00EDtulo:" }), _jsx("input", { type: "text", id: "title", value: currentVideo.title, onChange: (e) => handleChange("title", e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "category", children: "Categoria:" }), _jsxs("select", { id: "category", value: currentVideo.category, onChange: (e) => handleChange("category", e.target.value), children: [_jsx("option", { value: "Frontend", children: "Frontend" }), _jsx("option", { value: "Backend", children: "Backend" }), _jsx("option", { value: "Mobile", children: "Mobile" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "thumbnail", children: "Imagem:" }), _jsx("input", { type: "text", id: "thumbnail", value: currentVideo.thumbnail, onChange: (e) => handleChange("thumbnail", e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "videoUrl", children: "URL do V\u00EDdeo:" }), _jsx("input", { type: "text", id: "videoUrl", value: currentVideo.videoUrl, onChange: (e) => handleChange("videoUrl", e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "description", children: "Descri\u00E7\u00E3o:" }), _jsx("textarea", { id: "description", value: currentVideo.description, onChange: (e) => handleChange("description", e.target.value) })] }), _jsxs("div", { className: "btn-form", children: [_jsx("button", { type: "button", onClick: handleSaveEdit, children: "Salvar" }), _jsx("button", { type: "button", onClick: () => setModalOpen(false), children: "Cancelar" })] })] })] }))] }));
}
export default HomePage;
