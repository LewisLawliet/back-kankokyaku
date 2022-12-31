import { Router } from 'express';

import ArticleDao from './articleDao';
import ArticleRepository from './articleRepository';
import ArticleService from './articleService';
import ArticleController from './articleController';
import ArticleRouter from './articleRouter';

const router = Router();

const articleRepository = new ArticleRepository(ArticleDao);
const articleService = new ArticleService(articleRepository);
const articleController = new ArticleController(articleService);
const articleRouter = new ArticleRouter(router, articleController);

export { articleRouter };
