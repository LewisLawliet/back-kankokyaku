import ArticleEntity from './articleEntity';

class ArticleService {
	constructor(articleRepository) {
		this.articleRepository = articleRepository;
	}

	async getAllArticles() {
		const articles = await this.articleRepository.findAllArticles();
		if (!articles) {
			console.log('error in article service');
		} else return articles.map((article) => new ArticleEntity(article));
	}

	async addArticle(articleData) {
		const articleEntity = new ArticleEntity(articleData);

		//todo : add validators

		await this.articleRepository.createArticle(articleEntity);
		return articleEntity;
	}

	async getArticle(articleData) {
		const article = await this.articleRepository.findArticle(articleData);
		return article;
	}

	async updateArticle(articleParam, articleData) {
		const article = await this.articleRepository.updateArticle(
			articleParam,
			articleData
		);
		return article;
	}

	async deleteArticle(articleParam) {
		const article = await this.articleRepository.deleteArticle(articleParam);
		return article;
	}
}

export default ArticleService;
