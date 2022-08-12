//Interface of methods that can be used in the User entities

import { User } from "../entities/User";

export interface IUsersRepository {
	save(user: User): Promise<User>;
	findByEmail(email: string): Promise<User | null>;
}
