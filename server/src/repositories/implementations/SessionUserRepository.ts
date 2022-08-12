import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class SessionUserRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User | null> {
		const userFound = this.users.find((user) => user.email == email);

		if (!userFound) {
			return null;
		}

		return userFound;
	}

	async save(user: User): Promise<User> {
		this.users.push(user);
		return user;
	}
}
