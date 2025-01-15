import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NovoVideo.css";
function NovoVideo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [category, setCategory] = useState('Frontend');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    };
    const handleSave = async (e) => {
        e.preventDefault();
        if (!title || !description || !thumbnail || !videoUrl) {
            setError('Todos os campos são obrigatórios!');
            return;
        }
        if (!isValidUrl(thumbnail)) {
            setError('Por favor, insira um link válido para a imagem.');
            return;
        }
        if (!isValidUrl(videoUrl)) {
            setError('Por favor, insira um link válido para o vídeo.');
            return;
        }
        const newVideo = {
            title,
            description,
            thumbnail,
            videoUrl,
            category,
        };
        try {
            const response = await fetch('http://localhost:3001/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVideo),
            });
            if (!response.ok) {
                throw new Error('Erro ao salvar o vídeo.');
            }
            navigate('/');
        }
        catch (error) {
            setError('Ocorreu um erro ao salvar o vídeo.');
        }
    };
    return (_jsxs("div", { className: 'wrapper-form', children: [_jsx("h2", { children: "Novo V\u00EDdeo" }), _jsx("p", { children: "Preencha o formul\u00E1rio para criar um novo cart\u00E3o de v\u00EDdeo." }), _jsxs("form", { onSubmit: handleSave, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "title", children: "T\u00EDtulo:" }), _jsx("input", { placeholder: 'T\u00EDtulo do v\u00EDdeo', type: "text", id: "title", value: title, onChange: (e) => setTitle(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "category", children: "Categoria:" }), _jsxs("select", { id: "category", value: category, onChange: (e) => setCategory(e.target.value), children: [_jsx("option", { value: "Frontend", children: "Frontend" }), _jsx("option", { value: "Backend", children: "Backend" }), _jsx("option", { value: "Mobile", children: "Mobile" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "thumbnail", children: "Imagem:" }), _jsx("input", { placeholder: 'Link da imagem', type: "text", id: "thumbnail", value: thumbnail, onChange: (e) => setThumbnail(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "videoUrl", children: "V\u00EDdeo:" }), _jsx("input", { placeholder: 'Link do v\u00EDdeo', type: "text", id: "videoUrl", value: videoUrl, onChange: (e) => setVideoUrl(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "description", children: "Descri\u00E7\u00E3o:" }), _jsx("textarea", { placeholder: 'Do que se trata o v\u00EDdeo?', id: "description", value: description, onChange: (e) => setDescription(e.target.value), required: true })] }), error && _jsx("p", { style: { color: 'red' }, children: error }), _jsx("button", { className: 'btn-save', type: "submit", children: "Salvar V\u00EDdeo" })] })] }));
}
export default NovoVideo;
