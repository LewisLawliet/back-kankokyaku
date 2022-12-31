class AnswerRepository {
	constructor(answerDao) {
		this.answerDao = answerDao;
	}

	async findAll() {
		return await this.answerDao.findAll();
	}
	async create(answerEntity) {
		return await this.answerDao.create(answerEntity);
	}
}
export default AnswerRepository;
