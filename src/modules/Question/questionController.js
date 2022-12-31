class QuestionController {
	constructor(questionService) {
		this.questionService = questionService;
	}

	getAllQuestions = async ({ res, next }) => {
		try {
			let questions = await this.questionService.getAllQuestions();
			res.status(200).json(questions);
		} catch (error) {
			next(error);
		}
	};

	addQuestion = async (req, res, next) => {
		try {
			const question = await this.questionService.addQuestion({ ...req.body });
			res.status(201).json(question);
		} catch (error) {
			next(error);
		}
	};

	getQuestion = async (req, res, next) => {
		try {
			const question = await this.questionService.getQuestion(req.params.id);
			res.status(200).json(question);
		} catch (error) {
			next(error);
		}
	};

	updateQuestion = async (req, res, next) => {
		try {
			const question = await this.questionService.updateQuestion(
				req.params.id,
				{
					...req.body,
				}
			);
			res.status(200).json(question);
		} catch (error) {
			next(error);
		}
	};

	deleteQuestion = async (req, res, next) => {
		try {
			await this.questionService.deleteQuestion(req.params.id);
			res.status(200).json({ message: 'Question supprimée' });
		} catch (error) {
			next(error);
		}
	};
}

export default QuestionController;
