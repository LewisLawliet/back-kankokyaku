import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import morgan from 'morgan';
import routes from './src/modules';
import winston from 'winston';
import cookieParser from 'cookie-parser';
import Logger from './src/helpers/logger';
import { multerConfig } from './src/config/multer-config';
import * as path from 'path';

console.log('\u001b[' + 32 + 'm' + 'multerConfig:' + '\u001b[0m',
multerConfig)

const logger = new Logger(winston);
const middlewares = { cookieParser, morgan };
const application = new Server(
	express,
	routes,
	middlewares,
	logger,
	multerConfig,
	path
);

(async () => {
	try {
		await db.associateAll(db.sequelize.models);
		await db.sequelize.sync({ force: true });
		//await db.sequelize.sync({ alter: false });
		//console.log()
		await application.listen(process.env.app_port);
	} catch (error) {
		console.log(error);
		logger.log('warn', error.message);
	}
})();
