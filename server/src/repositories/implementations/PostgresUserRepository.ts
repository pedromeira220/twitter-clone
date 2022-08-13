import { databaseQuery } from "../../config/database";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User | null> {
		console.log(email);

		const res = await databaseQuery("SELECT * FROM client WHERE email = $1", [
			email,
		]);

		const usersFound = res.rows;

		if (usersFound.length == 0) {
			return null;
		}

		return usersFound[0];
	}

	async save(user: User): Promise<User> {
		console.log(user);

		return user;
	}
}
