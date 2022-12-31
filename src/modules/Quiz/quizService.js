import QuizEntity from './quizEntity';

class QuizService {
	constructor(quizRepository) {
		this.quizRepository = quizRepository;
	}

	async getAllQuizzes() {
		const quizzes = await this.quizRepository.findAllQuizzes();
		if (!quizzes) {
			console.log('error in quiz service');
		} else return quizzes.map((quiz) => new QuizEntity(quiz));
	}

	async addQuiz(quizData) {
		const quizEntity = new QuizEntity(quizData);

		//todo : add validators

		await this.quizRepository.createQuiz(quizEntity);
		return quizEntity;
	}

	async getQuiz(quizData) {
		const quiz = await this.quizRepository.findQuiz(quizData);
		return quiz;
	}

	async updateQuiz(quizParam, quizData) {
		const quiz = await this.quizRepository.updateQuiz(quizParam, quizData);
		return quiz;
	}

	async deleteQuiz(quizParam) {
		const quiz = await this.quizRepository.deleteQuiz(quizParam);
		return quiz;
	}
}

export default QuizService;
