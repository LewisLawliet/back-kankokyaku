import UserEntity from './userEntity';
import { ApiError } from '../../helpers/error';

class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	async getAllUsers() {
		const users = await this.userRepository.findAllUsers();
		return users.map((user) => new UserEntity(user));
	}

	async register(userData) {
		const userEntity = new UserEntity(userData);
		const user = await this.userRepository.findUserByEmail(userEntity);
		const pseudo = await this.userRepository.findUserByPseudo(userEntity);

		if (!userEntity.validate()) {
			console.log("Le mot de passe et/ou l'email sont manquants.");
			throw new ApiError(400, 'Missing required email and password fields');
		}

		if (user) {
			console.log('Cet utilisateur existe déjà.');
			throw new ApiError(400, 'Cet utilisateur existe déjà.');
		}

		if (pseudo) {
			console.log('Cet utilisateur existe déjà.');
			throw new ApiError(400, 'Ce pseudo existe déjà.');
		}
		/*const newUser = await this.userRepository.createUser(userEntity);
		return new UserEntity(newUser);*/
		try {
			const newUser = await this.userRepository.createUser(userEntity);
			// you can now access the newly created user
			console.log('success', newUser.toJSON());
			return new UserEntity(newUser);
		} catch (err) {
			// print the error details
			console.log('erreur création back', err);
		}
	}

	async login(userData) {
		const userEntity = new UserEntity(userData);
		//console.log('userEntity ligne 37 service', userEntity);
		console.log(
			'\u001b[' + 32 + 'm' + 'userEntity ligne 43 service:' + '\u001b[0m',
			userEntity
		);
		//console.log('userData ligne 38 service', userData);
		console.log(
			'\u001b[' + 32 + 'm' + 'userData ligne 48 service:' + '\u001b[0m',
			userData
		);
		if (!userEntity.validate()) {
			console.log("Password et/ou l'email manquants.");
			throw new ApiError(400, "Password et/ou l'email manquants.");
		}

		const user = await this.userRepository.findUserByEmail(userEntity);
		console.log('user ligne 38 service', user);
		if (!user) {
			console.log("Cet utilisateur n'existe pas.");
			throw new ApiError(400, "Cet utilisateur n'existe pas.");
		}
		const passwordMatch = await this.userRepository.compareHash(
			userEntity.password,
			user.password
		);
		if (!passwordMatch) {
			console.log('Le mot de passe est faux');
			throw new ApiError(400, 'Le mot de passe est faux');
		}
		return new UserEntity(user);
	}

	async updateUser(userParam, userData) {
		const user = await this.userRepository.updateUser(userParam, userData);
		return user;
	}

	async deleteUser(userParam) {
		const user = await this.userRepository.deleteUser(userParam);
		return user;
	}

	async me(user_id) {
		console.log('meeeeeee l72 service');
		const user = await this.userRepository.findById(user_id);
		console.log('\u001b[' + 32 + 'm' + 'user_id :' + '\u001b[0m', user_id);
		if (!user) {
			console.log("User doesn't exist Bro");
			throw new ApiError(400, "User doesn't exist");
		}
		return new UserEntity(user);
	}
}

export default UserService;
