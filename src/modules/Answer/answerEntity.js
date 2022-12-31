class AnswerEntity {
	constructor({ id, sentence, isCorrect, question_id }) {
		this.id = id;
		this.sentence = sentence;
		this.isCorrect = isCorrect;
		this.question_id = question_id;
	}

	validate() {
		return !this.id ? false : true;
	}
}

export default AnswerEntity;
