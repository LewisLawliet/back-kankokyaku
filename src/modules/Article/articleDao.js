import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class ArticleDao extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.UUID,
					allowNull: false,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
					default: sequelize.fn('uuid_generate_v4'),
					validate: {
						notNull: true,
						isUUID: 4,
					},
				},
				//isbn: DataTypes.STRING,
				title: {
					type: DataTypes.STRING,
					allowNull: false,
					//unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				content: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notNull: true,
					},
				},

				image: {
					type: DataTypes.STRING,
				},

				categorie_id: {
					type: DataTypes.UUID,
					//allowNull: false,
					references: {
						// Ceci est une référence à un autre modèle
						model: 'Categories',

						// C'est le nom de la colonne du modèle référencé
						key: 'id',

						// Avec PostgreSQL, il est éventuellement possible de déclarer quand vérifier la contrainte de clé étrangère, en passant le type Deferrable.
						//deferrable: Deferrable.INITIALLY_IMMEDIATE,
						// Options:
						// - `Deferrable.INITIALLY_IMMEDIATE` - Vérifier immédiatement les contraintes de clé étrangère
						// - `Deferrable.INITIALLY_DEFERRED` - Diffère toute vérification de contrainte de clé étrangère à la fin d'une transaction
						// - `Deferrable.NOT` - Ne pas reporter du tout les contrôles (par défaut) - Cela ne vous permettra pas de modifier dynamiquement la règle dans une transaction
					},
					/*validate: {
						notNull: true,
					},*/
				},
			},

			{ sequelize, modelName: 'Article' }
		);
	}
	static associate(models) {
		this.belongsTo(models.Categorie, {
			foreignKey: 'categorie_id',
			as: 'categories',
		});
		//this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
		return this;
		//this.belongsTo(CategorieDao)
		/*this.hasMany(models.Categorie, {as: "Category"})
		return this*/
	}
}

ArticleDao.init(db.sequelize);

export default ArticleDao;
