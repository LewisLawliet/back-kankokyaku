import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
	process.env.db_name,
	process.env.db_user,
	process.env.db_password,
	{
		//host: config.db_host,
		dialect: 'postgres',
		//port: config.db_port,
	}
);

const associateAll = async (models) =>
	Object.values(models).map((model) => model.associate(models));
const db = { sequelize, Sequelize, associateAll };

export default db;
