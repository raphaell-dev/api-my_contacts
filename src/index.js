const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

/*
// Conceito de Middleware (executando antes de todas as rotas)
app.use((request, response) => {
  request.appId = 'MeuAppID';
  // Ao enviar um .send, .json realiza o travamento das rotas
  response.send('Interceptado pelo Middleware');
});
*/
app.use(express.json());
app.use(routes);
// Middleware para pegar os erros emitidos na API
app.use((error, request, response, next) => {
  console.log('##### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
