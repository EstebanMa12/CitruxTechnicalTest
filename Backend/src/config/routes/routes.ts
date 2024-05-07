/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import {
    createArticleController,
    deleteArticleController,
    getArticlesController    
} from '../../controllers/articleController'

const routes = Router();

routes.post('/article', createArticleController);
routes.get('/articles', getArticlesController);
routes.delete('/article/:id', deleteArticleController);

export default routes;
