import AnswerEntity from './answerEntity';

class AnswerService {
	constructor(answerRepository) {
		this.answerRepository = answerRepository;
	}

	async getAll() {
		const answers = await this.answerRepository.findAll();
		return answers.map((answer) => new AnswerEntity(answer));
	}

	async add(answerData) {
		const answerEntity = new AnswerEntity(answerData);

		//todo : add validators

		await this.answerRepository.create(answerEntity);
		return answerEntity;
	}
}

export default AnswerService;
