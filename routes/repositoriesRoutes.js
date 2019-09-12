const Router = require('express').Router;
const RepositoryController = require('../controllers/repositoryController');

const routes = Router();

routes.get('/', RepositoryController.getAllRepositories);

routes.get('/:id', RepositoryController.getAllRepositoriesById);

module.exports = routes;