import { Client, Pool } from "pg";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import "dotenv/config";

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});

export class PostgresUserRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User | null> {
		const res = await queryFunc("SELECT *  FROM client");

		console.log(res.rows);

		return null;
	}

	async save(user: User): Promise<User> {
		this.users.push(user);
		return user;
	}
}

async function queryFunc(query: string) {
	const res = await pool.query(query);
	await pool.end();

	return res;
}
