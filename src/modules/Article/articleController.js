class ArticleController {
	constructor(articleService) {
		this.articleService = articleService;
	}

	getAllArticles = async ({ res, next }) => {
		try {
			let articles = await this.articleService.getAllArticles();
			res.status(200).json(articles);
		} catch (error) {
			next(error);
		}
	};

	addArticle = async (req, res, next) => {
		try {
			//console.log("req.body :",req.body.image);
			const article = await this.articleService.addArticle({
				...req.body,
				image: `${req.protocol}://${req.get('host')}/src/images/${req.file}`,
			});
			console.log('req.file', req.file);
			console.log('req.get("host")', req.get('host'));
			res.status(201).json(article);
		} catch (error) {
			next(error);
		}
	};

	getArticle = async (req, res, next) => {
		try {
			const article = await this.articleService.getArticle(req.params.title);
			res.status(200).json(article);
		} catch (error) {
			next(error);
		}
	};

	updateArticle = async (req, res, next) => {
		try {
			const article = await this.articleService.updateArticle(
				req.params.title,
				{
					...req.body,
				}
			);
			res.status(200).json(article);
		} catch (error) {
			next(error);
		}
	};

	deleteArticle = async (req, res, next) => {
		try {
			await this.articleService.deleteArticle(req.params.title);
			res.status(200).json({ message: 'Article supprimé' });
		} catch (error) {
			next(error);
		}
	};
}

export default ArticleController;
