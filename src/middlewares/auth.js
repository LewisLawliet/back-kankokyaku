class AuthMiddleware {
	constructor(jwtService) {
		this.jwt = jwtService;
	}

	authenticate = async (req, res, next) => {
		try {
			//const token = req.cookies['auth-cookie'];
			const token = req.cookies.auth_cookie;
			//console.log('tokeeeeeen', token);
			console.log(
				'\u001b[' + 32 + 'm' + 'repo l11 TOKEN:' + '\u001b[0m',
				token
			);
			if (!token) {
				return res.status(401).json('Accès refusé.');
			}
			const decodedToken = await this.jwt.decodeToken(token);
			//console.log('reeeq', req);
			console.log(
				'\u001b[' + 32 + 'm' + 'req authenticate repo l20:' + '\u001b[0m',
				req
			);
			if (!decodedToken) {
				return res.status(403).json('Votre session a expiré');
			}
			req.currentUserId = decodedToken.id;
			//console.log('req.currentUserId l 16 auth', req.currentUserId);
			console.log(
				'\u001b[' + 32 + 'm' + 'req.currentUserId l 26 auth:' + '\u001b[0m',
				req.currentUserId
			);
			next();
		} catch (error) {
			return res.status(401).json("L'authentification a échoué : " + error);
		}
	};
}
export default AuthMiddleware;
