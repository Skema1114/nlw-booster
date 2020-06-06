import express, { response, request } from 'express';

const app = express();

app.use(express.json());

// ROTA: endereço completo da requisição
// RECURSO: qual entidade do sistema estamos acessando

// GET: buscar uma ou mais informações do back-end
// POST: criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: apagar uma informação do back-end

// REQUEST PARAM: parâmetros que vem na própria rota que identificam um recurso
// QUERY PARAM: parâmetro que vem na própria rota para filtros, paginações
// REQUEST BODY: parâmetro para criação/atualização de informações

const users = [
  'Rafael',
  'Josicleiderson',
  'Matias',
  'Diego'
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  console.log(search)

  return response.json({
    users: users,
    filteredUsers: filteredUsers
  });
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
})

app.post('/users', (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: 'Rafael',
    email: 'rafael@rocketseat.com.br'
  };

  return response.json({
    user: user,
    data: data
  });
})

app.listen(3333);