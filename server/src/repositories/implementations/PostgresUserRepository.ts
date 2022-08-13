import { databaseQuery } from "../../config/database";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User | null> {
		console.log(email);

		const res = await databaseQuery("SELECT * FROM users WHERE email = $1", [
			email,
		]);

		const usersFound = res.rows;

		if (usersFound.length == 0) {
			return null;
		}

		return usersFound[0];
	}

	async save(user: User): Promise<User> {
		const { created_at, email, identifier, name, profile_picture, id } = user;

		try {
			await databaseQuery(
				"INSERT INTO users (created_at, email, identifier, name, profile_picture, id) VALUES($1, $2, $3, $4, $5, $6)",
				[created_at, email, identifier, name, profile_picture, id]
			);
		} catch (error) {
			console.error(error);

			throw new Error("Error when trying to create user");
		}

		return user;
	}
}
