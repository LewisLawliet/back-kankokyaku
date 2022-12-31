import bcrypt from 'bcrypt';

class UserRepository {
	constructor(userDao) {
		this.userDao = userDao;
	}

	async findAllUsers() {
		return await this.userDao.findAll({});
	}
	async createUser(userEntity) {
		console.log(
			'\u001b[' + 32 + 'm' + 'userEntity ligne 13 userRepo' + '\u001b[0m',
			userEntity
		);
		const salt = bcrypt.genSaltSync(10);
		userEntity.password = bcrypt.hashSync(userEntity.password, salt);
		return await this.userDao.create(userEntity);
	}

	async findUserByEmail(userEntity) {
		return await this.userDao.findOne({ where: { email: userEntity.email } });
	}

	async findUserByPseudo(userEntity) {
		return await this.userDao.findOne({ where: { name: userEntity.name } });
	}

	async findById(userId) {
		console.log('userId', userId);
		console.log('userIdid ligne 21 userRepo', userId);
		console.log(
			'\u001b[' + 32 + 'm' + 'userIdid ligne 21 userRepo' + '\u001b[0m',
			userId
		);
		console.log(
			'\u001b[' + 32 + 'm' + 'userDao ligne 32 userRepo' + '\u001b[0m',
			this.userDao
		);
		return await this.userDao.findOne({ where: { id: userId } });
	}

	compareHash = async (password, hash) =>
		await bcrypt.compareSync(password, hash);

	async updateUser(email, userEntity) {
		const userToUpdate = await this.userDao.findOne({
			where: { email },
		});
		const userUpdated = await userToUpdate.update(userEntity);
		return userUpdated;
	}

	async deleteUser(email) {
		await this.userDao.destroy({
			where: { email },
		});
	}
}
export default UserRepository;
