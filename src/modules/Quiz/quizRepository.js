class QuizRepository {
	constructor(quizDao) {
		this.quizDao = quizDao;
	}

	async findAllQuizzes() {
		const quizzes = await this.quizDao.findAll();
		console.log('all quizzes', quizzes);
		if (!quizzes) {
			console.log('error in categorie repo');
		} else return quizzes;
	}

	async findQuiz(name) {
		const quiz = await this.quizDao.findOne({
			where: { name },
		});
		return quiz;
	}

	async createQuiz(quizEntity) {
		return await this.quizDao.create(quizEntity);
	}

	async updateQuiz(name, quizEntity) {
		const quizToUpdate = await this.quizDao.findOne({
			where: { name },
		});

		const quizUpdated = await quizToUpdate.update(quizEntity);
		return quizUpdated;
	}

	async deleteQuiz(name) {
		await this.quizDao.destroy({
			where: { name },
		});
	}
}
export default QuizRepository;
