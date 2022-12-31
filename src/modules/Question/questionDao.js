import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

//BookDao
class QuestionDao extends Model {
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
				//isbn: DataTypes.STRING,
				sentence: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				number: {
					type: DataTypes.INTEGER,
					allowNull: false,
					unique: false,
					validate: {
						notNull: true,
					},
				},
				points: {
					type: DataTypes.INTEGER,
					allowNull: false,
					unique: false,
					validate: {
						notNull: true,
					},
				},
				//Ajouter association quiz Quiz
				//Ajouter association answers Answer[]
				//Ajouter association user
				//questions  Question[]
				//scores Score[]
				//grades Grade[]
				//userquizzes UserQuiz[]
			},
			{ sequelize, modelName: 'Question' }
		);
	}
	static associate(models) {
		return this;
	}
}

QuestionDao.init(db.sequelize);

export default QuestionDao;
