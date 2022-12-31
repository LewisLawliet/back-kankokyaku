//import { multerConfig } from './src/config/multer-config';

class ArticleRouter {
	constructor(router, articleController, multerConfig) {
		this.router = router;
		this.initializeRoutes(articleController, multerConfig);
		return this.router;
	}
	initializeRoutes(articleController, multerConfig) {
		this.router.route('/articles').get(articleController.getAllArticles);
		this.router.route('/articles').post(articleController.addArticle, (req, res, next) => {
			const p = req.file;
			console.log(
				'\u001b[' + 32 + 'm' + 'req.file 2:' + '\u001b[0m',
				 
			);
			
			//code
		});

		/*.all(articleController.getAllArticles, function (req, res, next) {
				console.log('\u001b[' + 32 + 'm' + 'AlllllllllllÒ' + '\u001b[0m');
				next(); // pass control to the next handler
			  });
			/*.post(articleController.addArticle, function (req, res, next) {
				console.log(
					'\u001b[' + 32 + 'm' + 'req.file 2:' + '\u001b[0m',
					req.file
				);
				multerConfig.single('image')(req, res, function (error) {
					console.log(
						'\u001b[' + 32 + 'm' + 'req.file 3' + '\u001b[0m',
						req.file
					);
					if (error) {
						console.log(`upload.single error: ${error}`);
						return res.sendStatus(500);
					}
					// code
				});
			});*/

		this.router
			.route('/articles/:title')
			.get(articleController.getArticle)
			.put(articleController.updateArticle)
			.delete(articleController.deleteArticle);
	}
}
export default ArticleRouter;
