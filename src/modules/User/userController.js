class UserController {
	constructor(userService, jwtService) {
		this.userService = userService;
		this.jwtService = jwtService;
	}

	getAllUsers = async ({ res, next }) => {
		try {
			let users = await this.userService.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	register = async (req, res, next) => {
		try {
			const user = await this.userService.register({ ...req.body });
			res.status(201).json(user);
		} catch (error) {
			console.log('erroàààààr register', error);
			next(error);
		}
	};

	login = async (req, res, next) => {
		try {
			const user = await this.userService.login({ ...req.body });
			//console.log(user);
			const token = await this.jwtService.generateToken({ id: user.id });
			//console.log('token', token);
			console.log('req.currentUserId', req.currentUserId);
			console.log(
				'\u001b[' + 32 + 'm' + 'user_id l34 controller:' + '\u001b[0m',
				user.id
			);
			//res.cookie('auth-cookie', token, { expire: 3600 });
			res
				.cookie('auth_cookie', token, {
					expires: false,
					secure: false,
					sameSite: 'strict',
				})
				.send('cookie being initialised');
			res.status(200).json(user);
			console.log('token l39 controller', token);
		} catch (error) {
			console.log(
				'\u001b[' + 32 + 'm' + 'error controller l47:' + '\u001b[0m',
				error
			);
			next(error);
		}
	};

	logout = async (req, res, next) => {
		try {
			res.clearCookie('auth_cookie', {
				sameSite: 'strict',
			});
			res.status(200).json({ message: 'Utilisateur déconnecté 🔐' });
		} catch (err) {
			next(err);
		}
	};

	updateUser = async (req, res, next) => {
		try {
			const user = await this.userService.updateUser(req.params.email, {
				...req.body,
			});
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};
	deleteUser = async (req, res, next) => {
		try {
			await this.userService.deleteUser(req.params.email);
			res.status(200).json({ message: 'Utilisateur supprimé' });
		} catch (error) {
			next(error);
		}
	};
	me = async (req, res, next) => {
		//console.log(req.currentUserId);
		console.log(
			'\u001b[' + 32 + 'm' + 'req.currentUserId:' + '\u001b[0m',
			req.currentUserId
		);
		try {
			const user = await this.userService.me(req.currentUserId);
			console.log('user l 66', user);
			res.status(200).json(user);
		} catch (err) {
			next(err);
		}
	};
}

export default UserController;
