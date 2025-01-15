import { NowRequest, NowResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// Função para ler o db.json e servir como resposta
const dbFilePath = path.join(__dirname, '../../db.json');

export default async (req: NowRequest, res: NowResponse) => {
  try {
    // Lê o arquivo db.json
    const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf-8'));

    // Lógica simples para tratar a requisição com base no método HTTP
    if (req.method === 'GET') {
      // Retorna todos os dados no db.json
      res.status(200).json(db);
    } else {
      res.status(405).send('Método não permitido');
    }
  } catch (error) {
    console.error('Erro ao ler db.json:', error);
    res.status(500).send('Erro no servidor');
  }
};
