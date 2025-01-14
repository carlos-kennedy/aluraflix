import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Altere para o seu arquivo JSON
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
