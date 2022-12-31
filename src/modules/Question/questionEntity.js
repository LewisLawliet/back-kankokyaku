class QuestionEntity {
	constructor({
		id,
		//isbn,
		sentence,
		number,
		points,
	}) {
		this.id = id;
		this.sentence = sentence;
		this.number = number;
		this.points = points;
	}

	validate() {
		return !this.id ? false : true;
	}
}

export default QuestionEntity;
