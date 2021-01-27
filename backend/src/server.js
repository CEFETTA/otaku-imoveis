import express from 'express';

const server = express();

server.use(express.json());

server.get('/user', (request, response) => {
  return response.json({ name: 'Thiago Fernandes Dornelles' });
});

server.listen(3333);
