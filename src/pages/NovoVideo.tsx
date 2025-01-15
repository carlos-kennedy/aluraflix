import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NovoVideo.css";

interface Video {
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

function NovoVideo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSave = async (e: React.FormEvent) => {
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

    const newVideo: Video = {
      title,
      description,
      thumbnail,
      videoUrl,
      category,
    };

    try {
      const response = await fetch('http://localhost:3000/videos', {
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
    } catch (error) {
      setError('Ocorreu um erro ao salvar o vídeo.');
    }
  };

  return (
    <div className='wrapper-form'>
      <h2>Novo Vídeo</h2>
      <p>Preencha o formulário para criar um novo cartão de vídeo.</p>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            placeholder='Título do vídeo'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        <div>
          <label htmlFor="thumbnail">Imagem:</label>
          <input
            placeholder='Link da imagem'
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="videoUrl">Vídeo:</label>
          <input
            placeholder='Link do vídeo'
            type="text"
            id="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            placeholder='Do que se trata o vídeo?'
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='btn-save' type="submit">Salvar Vídeo</button>
      </form>
    </div>
  );
}

export default NovoVideo;