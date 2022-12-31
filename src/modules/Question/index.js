import { Router } from 'express';

import QuestionDao from './questionDao';
import QuestionRepository from './questionRepository';
import QuestionService from './questionService';
import QuestionController from './questionController';
import QuestionRouter from './questionRouter';

const router = Router();

const questionRepository = new QuestionRepository(QuestionDao);
const questionService = new QuestionService(questionRepository);
const questionController = new QuestionController(questionService);
const questionRouter = new QuestionRouter(router, questionController);

export { questionRouter };
