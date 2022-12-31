class QuizController {
	constructor(quizService) {
		this.quizService = quizService;
	}

	getAllQuizzes = async ({ res, next }) => {
		try {
			let quizzes = await this.quizService.getAllQuizzes();
			res.status(200).json(quizzes);
		} catch (error) {
			next(error);
		}
	};

	addQuiz = async (req, res, next) => {
		try {
			const quiz = await this.quizService.addQuiz({ ...req.body });
			res.status(201).json(quiz);
		} catch (error) {
			next(error);
		}
	};

	getQuiz = async (req, res, next) => {
		try {
			const quiz = await this.quizService.getQuiz(req.params.name);
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	};

	updateQuiz = async (req, res, next) => {
		try {
			const quiz = await this.quizService.updateQuiz(req.params.name, {
				...req.body,
			});
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	};

	deleteQuiz = async (req, res, next) => {
		try {
			await this.quizService.deleteQuiz(req.params.name);
			res.status(200).json({ message: 'Quiz supprimé' });
		} catch (error) {
			next(error);
		}
	};
}

export default QuizController;
