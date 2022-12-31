class ApiError extends Error {
	constructor(statusCode, message) {
		super();
		this.statusCode = statusCode;
		this.message = message;
	}
}

const handleError = (err, res, logger) => {
	const { message } = err;
	const statusCode = err.statusCode ? err.statusCode : 500;
	console.log('\u001b[' + 32 + 'm' + 'err errojs l12' + '\u001b[0m', err);
	logger.log(statusCode, err);
	res.status(statusCode).json({
		statusCode,
		message,
	});
};

export { ApiError, handleError };
