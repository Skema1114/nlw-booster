import express, { request, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;

/**
 * PADROES DA COMUNIDADE
 *
 *
 * => PARA METODOS
 *
 * INDEX: uma listagem
 * SHOW: exibir um unico registro
 * CREATE (ou STORE): criar um registro
 * UPDATE: atualizar um registo
 * DELETE (ou DESTROY): deletar um registro
 *
 *
 * => PARA ESTRUTURA (PATTERNS)
 *
 * SERVICE PATTER: todo tipo de lógica que há nesse arquivo
 * REPOSITORY PATTERN (ou DATA MAPPER): tudo que envolve banco de dados
 */
