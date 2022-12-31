class QuestionRouter {
	constructor(router, questionController) {
		this.router = router;
		this.initializeRoutes(questionController);
		return this.router;
	}
	initializeRoutes(questionController) {
		this.router
			.route('/questions')
			.get(questionController.getAllQuestions)
			.post(questionController.addQuestion);

		this.router
			.route('/questions/:id')
			.get(questionController.getQuestion)
			.put(questionController.updateQuestion)
			.delete(questionController.deleteQuestion);
	}
}
export default QuestionRouter;
