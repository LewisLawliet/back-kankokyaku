import QuestionEntity from './questionEntity';

class QuestionService {
	constructor(questionRepository) {
		this.questionRepository = questionRepository;
	}

	async getAllQuestions() {
		const questions = await this.questionRepository.findAllQuestions();
		if (!questions) {
			console.log('error in question service');
		} else return questions.map((question) => new QuestionEntity(question));
	}

	async addQuestion(questionData) {
		const questionEntity = new QuestionEntity(questionData);

		//todo : add validators

		await this.questionRepository.createQuestion(questionEntity);
		return questionEntity;
	}

	async getQuestion(questionData) {
		const question = await this.questionRepository.findQuestion(questionData);
		return question;
	}

	async updateQuestion(questionParam, questionData) {
		const question = await this.questionRepository.updateQuestion(
			questionParam,
			questionData
		);
		return question;
	}

	async deleteQuestion(questionParam) {
		const question = await this.questionRepository.deleteQuestion(
			questionParam
		);
		return question;
	}
}

export default QuestionService;
