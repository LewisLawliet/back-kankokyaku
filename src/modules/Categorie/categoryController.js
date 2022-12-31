class CategoryController {
	constructor(categoryService) {
		this.categoryService = categoryService;
	}

	getAllCategories = async ({ res, next }) => {
		try {
			let categories = await this.categoryService.getAllCategories();
			res.status(200).json(categories);
		} catch (error) {
			next(error);
		}
	};

	addCategory = async (req, res, next) => {
		try {
			const category = await this.categoryService.addCategory({ ...req.body });
			res.status(201).json(category);
		} catch (error) {
			next(error);
		}
	};

	getCategory = async (req, res, next) => {
		try {
			const category = await this.categoryService.getCategory(req.params.name);
			res.status(200).json(category);
		} catch (error) {
			next(error);
		}
	};

	updateCategory = async (req, res, next) => {
		try {
			const category = await this.categoryService.updateCategory(
				req.params.name,
				{
					...req.body,
				}
			);
			res.status(200).json(category);
		} catch (error) {
			next(error);
		}
	};

	deleteCategory = async (req, res, next) => {
		try {
			await this.categoryService.deleteCatagory(req.params.name);
			res.status(200).json({ message: 'Categorie supprimée' });
		} catch (error) {
			next(error);
		}
	};
}

export default CategoryController;
