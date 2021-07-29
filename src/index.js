const express = require('express');

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

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
