class ArticleEntity {
	constructor({ id, title, content, image, categorie_id }) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.image = image;
		this.categorie_id = categorie_id;
	}

	validate() {
		return !this.id ? false : true;
	}
}

export default ArticleEntity;
