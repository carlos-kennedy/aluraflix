import * as jsonServer from 'json-server';

import { NowRequest, NowResponse } from '@vercel/node';
import cors from 'cors';  // Importando o pacote CORS

const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Caminho do seu db.json
const middlewares = jsonServer.defaults();

// Usando o middleware CORS para permitir requisições de qualquer origem
server.use(cors({
  origin: '*', // Permite qualquer origem; você pode especificar URLs específicas aqui
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

server.use(middlewares);
server.use(router);

export default (req: NowRequest, res: NowResponse) => {
  server(req, res); // Passando a requisição e resposta para o servidor
};
