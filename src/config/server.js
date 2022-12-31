import cors from 'cors';
import { handleError } from '../helpers/error';

class Server {
	constructor(express, routes, middlewares, logger, multerConfig, path) {
		this.app = express();
		this.initializeBodyParsing(express);
		this.initializeMiddlewares(middlewares, logger, multerConfig);
		this.initializeApplicationRouter(routes);
		this.app.use((err, req, res, next) => {
			handleError(err, res, logger);
		});
		this.app.use('/src/images', express.static(path.join(__dirname, 'images')));
	}

	initializeBodyParsing(express) {
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(express.json());
		this.app.use(
			cors({
				origin: 'http://localhost:3000',
				credentials: true,
			})
		);
	}

	initializeMiddlewares({ cookieParser, morgan }, logger, multerConfig) {
		this.app.use(cookieParser());
		//this.app.use(logger);
		this.app.use(morgan('combined', { stream: logger.stream }));
		this.app.use(multerConfig);
	}

	initializeApplicationRouter(routes) {
		this.app.use(routes);
	}

	listen(port) {
		this.app.listen(port, async () =>
			//console.log(`Application started on port: ${port}`)
			console.log(
				'\u001b[' + 32 + 'm' + 'Application started on port:' + '\u001b[0m',
				port
			)
		);
	}
}

export default Server;
