import { Router } from 'express';

import QuizDao from './quizDao';
import QuizRepository from './quizRepository';
import QuizService from './quizService';
import QuizController from './quizController';
import QuizRouter from './quizRouter';

const router = Router();

const quizRepository = new QuizRepository(QuizDao);
const quizService = new QuizService(quizRepository);
const quizController = new QuizController(quizService);
const quizRouter = new QuizRouter(router, quizController);

export { quizRouter };
