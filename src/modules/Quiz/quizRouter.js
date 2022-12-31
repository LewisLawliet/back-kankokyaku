class QuizRouter {
	constructor(router, quizController) {
		this.router = router;
		this.initializeRoutes(quizController);
		return this.router;
	}
	initializeRoutes(quizController) {
		this.router
			.route('/quizzes')
			.get(quizController.getAllQuizzes)
			.post(quizController.addQuiz);

		this.router
			.route('/quizzes/:name')
			.get(quizController.getQuiz)
			.put(quizController.updateQuiz)
			.delete(quizController.deleteQuiz);
	}
}
export default QuizRouter;
