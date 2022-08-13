import { databaseQuery } from "../../config/database";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User | null> {
		const res = await databaseQuery("SELECT * FROM users WHERE email = $1", [
			email,
		]);

		const usersFound = res.rows;

		if (usersFound.length > 0) {
			return usersFound[0];
		}

		return null;
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

			throw new Error("Internal server error, please try again later");
		}

		return user;
	}

	async findByIdentifier(identifier: string): Promise<User | null> {
		const res = await databaseQuery("SELECT * FROM users WHERE identifier = $1", [
			identifier,
		]);

		const usersFound = res.rows;

		if (usersFound.length > 0) {
			return usersFound[0];
		}

		return null;
	}
}
