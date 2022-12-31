class QuestionRepository {
	constructor(questionDao) {
		this.questionDao = questionDao;
	}

	async findAllQuestions() {
		const questions = await this.questionDao.findAll();
		console.log('all questions', questions);
		if (!questions) {
			console.log('error in question repo');
		} else return questions;
	}

	async findQuestion(id) {
		const question = await this.questionDao.findOne({
			where: { id },
		});
		return question;
	}

	async createQuestion(questionEntity) {
		return await this.questionDao.create(questionEntity);
	}

	async updateQuestion(id, questionEntity) {
		const questionToUpdate = await this.questionDao.findOne({
			where: { id },
		});

		const questionUpdated = await questionToUpdate.update(questionEntity);
		return questionUpdated;
	}

	async deleteQuestion(id) {
		await this.questionDao.destroy({
			where: { id },
		});
	}
}
export default QuestionRepository;
