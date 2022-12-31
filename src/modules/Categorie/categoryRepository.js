class CategoryRepository {
	constructor(categoryDao) {
		this.categoryDao = categoryDao;
	}

	async findAllCategories() {
		const categories = await this.categoryDao.findAll();
		console.log('all articles', categories);
		if (!categories) {
			console.log('error in categorie repo');
		} else return categories;
	}

	async findCategory(name) {
		const category = await this.categoryDao.findOne({
			where: { name },
		});
		return category;
	}

	async createCategory(categoryEntity) {
		return await this.categoryDao.create(categoryEntity);
	}

	async updateCategory(name, categoryEntity) {
		const categoryToUpdate = await this.categoryDao.findOne({
			where: { name },
		});

		const categoryUpdated = await categoryToUpdate.update(categoryEntity);
		return categoryUpdated;
	}

	async deleteCategory(name) {
		await this.categoryDao.destroy({
			where: { name },
		});
	}
}
export default CategoryRepository;
