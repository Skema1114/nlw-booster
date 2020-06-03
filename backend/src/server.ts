import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  response.json([
    'Rafael',
    'Josicleiderson',
    'Matias',
    'Diego'
  ]);
});

app.listen(3333);