import { jwtService } from '../libs';

import AuthMiddleware from './auth';

const auth = new AuthMiddleware(jwtService);

export { auth };
