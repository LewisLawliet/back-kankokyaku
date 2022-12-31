class JwtService {
	constructor(jwt, secret) {
		this.jwt = jwt;
		this.secret = secret;
	}

	async generateToken(data) {
		return await this.jwt.sign(data, this.secret);
	}

	async decodeToken(token) {
		return await this.jwt.verify(token, this.secret);
	}
}
export default JwtService;
