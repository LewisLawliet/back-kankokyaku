class AnswerRouter {
	constructor(router, answerController) {
		this.router = router;
		this.initializeRoutes(answerController);
		return this.router;
	}
	initializeRoutes(answerController) {
		this.router
			.route('/answers')
			.get(answerController.getAll)
			.post(answerController.add);
	}
}
export default AnswerRouter;
