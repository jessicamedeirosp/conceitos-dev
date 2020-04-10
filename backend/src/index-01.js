
const express = require('express'); // resquisitando express 
const app = express(); //criando uma conexão express
app.use(express.json()); //define o formato de body que será usado, no caso JSON
app.get('/projects', (request, response) => {
  const { title, owner } = request.query; /* pegando request passada pelo 
  Query Params*/
  console.log(title);
  console.log(owner);
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]); /* .send retorna texto; 
  .json retorna json */
}); /*parametro 1 = define endereço/url que será observado; 
parametro 2 retorno rota*/

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  console.log(title);
  console.log(owner);
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.listen(3333, () => {
  console.log('Back-end Started!');
}); /*Parametro 1: defindo rota porta que o serviço ira rodar, 
,parametro 2: função*/