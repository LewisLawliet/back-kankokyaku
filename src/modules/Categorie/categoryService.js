import CategoryEntity from './categoryEntity';

class CategoryService {
	constructor(categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	async getAllCategories() {
		const categories = await this.categoryRepository.findAllCategories();
		if (!categories) {
			console.log('error in category service');
		} else return categories.map((category) => new CategoryEntity(category));
	}

	async addCategory(categoryData) {
		const categoryEntity = new CategoryEntity(categoryData);

		//todo : add validators

		await this.categoryRepository.createCategory(categoryEntity);
		return categoryEntity;
	}

	async getCategory(categoryData) {
		const category = await this.categoryRepository.findCategory(categoryData);
		return category;
	}

	async updateCategory(categoryParam, categoryData) {
		const category = await this.categoryRepository.updateCategory(
			categoryParam,
			categoryData
		);
		return category;
	}

	async deleteCategory(categoryParam) {
		const category = await this.categoryRepository.deleteCategory(
			categoryParam
		);
		return category;
	}
}

export default CategoryService;
