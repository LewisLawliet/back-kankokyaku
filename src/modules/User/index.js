import { Router } from 'express';
import { jwtService } from '../../libs';
import { auth } from '../../middlewares';

import UserDao from './userDao';
import UserRepository from './userRepository';
import UserService from './userService';
import UserController from './userController';
import UserRouter from './userRouter';

const router = Router();

const userRepository = new UserRepository(UserDao);
const userService = new UserService(userRepository);
const userController = new UserController(userService, jwtService);
const userRouter = new UserRouter(router, auth, userController);

export { userRouter };
