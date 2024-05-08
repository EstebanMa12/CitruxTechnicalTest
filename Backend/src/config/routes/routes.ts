
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import {
    createArticleController,
    deleteArticleController,
    getArticlesController,
    getArticleController
} from '../../controllers/articleController'

import {
    createQueryController,
    deleteQueryController,
    getQueriesController
} from '../../controllers/queryController'


const routes = Router();

routes.post('/article', createArticleController);
routes.get('/articles', getArticlesController);
routes.delete('/article/:id', deleteArticleController);
routes.get('/article/:id', getArticleController);
routes.post('/query', createQueryController);
routes.get('/queries', getQueriesController);
routes.delete('/query/:id', deleteQueryController);

export default routes;
