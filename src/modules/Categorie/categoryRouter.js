class CategoryRouter {
	constructor(router, categoryController) {
		this.router = router;
		this.initializeRoutes(categoryController);
		return this.router;
	}
	initializeRoutes(categoryController) {
		this.router
			.route('/categories')
			.get(categoryController.getAllCategories)
			.post(categoryController.addCategory);

		this.router
			.route('/categories/:name')
			.get(categoryController.getCategory)
			.put(categoryController.updateCategory)
			.delete(categoryController.deleteCategory);
	}
}
export default CategoryRouter;
