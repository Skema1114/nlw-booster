import express, { response, request } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

// AULA 2: essa linha é para definir o caminho de arquivos estáticos que podem ser utilizados, como pdfs, imagens etc...
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

/**
 * ROTA: endereço completo da requisição
 * RECURSO: qual entidade do sistema estamos acessando
 *
 * GET: buscar uma ou mais informações do back-end
 * POST: criar uma nova informação no back-end
 * PUT: atualizar uma informação existente no back-end
 * DELETE: apagar uma informação do back-end
 *
 * REQUEST PARAM: parâmetros que vem na própria rota que identificam um recurso
 * QUERY PARAM: parâmetro que vem na própria rota para filtros, paginações
 * REQUEST BODY: parâmetro para criação/atualização de informações
 *
 *
 * CORS() recebe como parametro os sites que acessarão a api ( { origin: 'www.' } )
 */