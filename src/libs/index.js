import JwtService from './jwt';
import jwt from 'jsonwebtoken';

const jwtService = new JwtService(jwt, process.env.jwt_secret);

export { jwtService };
