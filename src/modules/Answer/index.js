import { Router } from 'express';

import AnswerDao from './answerDao';
import AnswerRepository from './answerRepository';
import AnswerService from './answerService';
import AnswerController from './answerController';
import AnswerRouter from './answerRouter';

const router = Router();

const answerRepository = new AnswerRepository(AnswerDao);
const answerService = new AnswerService(answerRepository);
const answerController = new AnswerController(answerService);
const answerRouter = new AnswerRouter(router, answerController);

export { answerRouter };
