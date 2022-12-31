import { Router } from 'express';

import CategoryDao from './categoryDao';
import CategoryRepository from './categoryRepository';
import CategoryService from './categoryService';
import CategoryController from './categoryController';
import CategoryRouter from './categoryRouter';

const router = Router();

const categoryRepository = new CategoryRepository(CategoryDao);
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);
const categoryRouter = new CategoryRouter(router, categoryController);

export { categoryRouter };
