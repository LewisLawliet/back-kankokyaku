class QuizEntity {
	constructor({
		id,
		//isbn,
		name,
	}) {
		this.id = id;
		this.name = name;
	}

	validate() {
		return !this.id ? false : true;
	}
}

export default QuizEntity;
