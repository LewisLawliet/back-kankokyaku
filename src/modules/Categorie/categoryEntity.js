class CategoryEntity {
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

export default CategoryEntity;
