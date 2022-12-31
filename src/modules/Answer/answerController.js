class AnswerController {
	constructor({ answerService }) {
		this.answerService = answerService;
	}

	getAll = async ({ res, next }) => {
		try {
			let answers = await this.answerService.getAll();
			res.status(200).json(answers);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const answer = await this.answerService.add({ ...req.body });
			res.status(201).json(answer);
		} catch (error) {
			next(error);
		}
	};
}

export default AnswerController;
