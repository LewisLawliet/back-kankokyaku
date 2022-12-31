import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class AnswerDao extends Model {
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
				sentence: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notNull: true,
					},
				},
				isCorrect: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				/*question_id: {

				},*/
			},
			{ sequelize, modelName: 'Answer' }
		);
	}
	static associate(models) {
		return this;
	}
}

AnswerDao.init(db.sequelize);

export default AnswerDao;
