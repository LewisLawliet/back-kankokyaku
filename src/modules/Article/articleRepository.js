class ArticleRepository {
	constructor(articleDao) {
		this.articleDao = articleDao;
	}

	async findAllArticles() {
		const articles = await this.articleDao.findAll();
		console.log('all articles', articles);
		if (!articles) {
			console.log('error in article repo');
		} else return articles;
	}

	/*async findArticle(title) {
		const article = await this.articleDao.findOne({
			where: { title },
		});
		return article;
	}*/
	async findArticle(title) {
		const article = await this.articleDao.findOne({
			where: { title: title },
		});
		return article;
	}

	async createArticle(articleEntity) {
		return await this.articleDao.create(articleEntity);
	}

	async updateArticle(title, articleEntity) {
		const articleToUpdate = await this.articleDao.findOne({
			where: { title },
		});

		const articleUpdated = await articleToUpdate.update(articleEntity);
		return articleUpdated;
	}

	async deleteArticle(title) {
		// const bookToDelete = await this.bookDao.findOne({
		// 	where: { title },
		// });
		// if (!bookToDelete) {
		// 	console.log("Ce livre n'existe pas dans la base de données.");
		// }
		await this.articleDao.destroy({
			where: { title },
		});
	}
}
export default ArticleRepository;
