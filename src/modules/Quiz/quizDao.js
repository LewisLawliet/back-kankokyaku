import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

//BookDao
class QuizDao extends Model {
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
				//Ajouter association catégorie
				//Ajouter association user
				//questions  Question[]
				//scores Score[]
				//grades Grade[]
				//userquizzes UserQuiz[]
			},
			{ sequelize, modelName: 'Quiz' }
		);
	}
	static associate(models) {
		this.hasMany(models.Question, {
			foreignKey: 'quiz_id',
			as: 'questions',
		});
		return this;
	}
}

QuizDao.init(db.sequelize);

export default QuizDao;
