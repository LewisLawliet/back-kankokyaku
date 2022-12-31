class UserEntity {
	constructor({ id, name, email, password, role }) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	validate() {
		return !this.email || !this.password ? false : true;
	}
}

export default UserEntity;
