// src/types.ts
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  isFeatured: boolean; // Propriedade para marcar vídeos em destaque
  createdAt: string; // Propriedade para a data de criação
}