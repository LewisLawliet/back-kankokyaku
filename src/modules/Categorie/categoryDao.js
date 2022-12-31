import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

//BookDao
class CategoryDao extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.UUID,
					allowNull: false,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
					validate: {
						notNull: true,
						isUUID: 4,
					},
				},

				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
			},
			{ sequelize, modelName: 'Categorie' }
		);
	}
	static associate(models) {
		this.hasMany(models.Article, {
			foreignKey: 'categorie_id',
			as: 'articles',
		});
		return this;
	}
}

CategoryDao.init(db.sequelize);

export default CategoryDao;
