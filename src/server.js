import http from 'http';
import { route } from './routes/index.js';

const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});