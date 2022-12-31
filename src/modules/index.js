import { articleRouter } from './Article';
import { userRouter } from './User';
import { answerRouter } from './Answer';
import { categoryRouter } from './Categorie';
import { quizRouter } from './Quiz';
import { questionRouter } from './Question';

const routes = [
	articleRouter,
	userRouter,
	answerRouter,
	categoryRouter,
	quizRouter,
	questionRouter,
];

export default routes;
