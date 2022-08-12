import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IError } from "./IError";

export class CreateUserUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	async execute(data: ICreateUserRequestDTO): Promise<User | IError | null> {
		const userFound = await this.usersRepository.findByEmail(data.email);

		if (userFound) {
			const error: IError = {
				message: "User already exists",
			};

			return error;
		}

		const user = new User(data);

		return await this.usersRepository.save(user);
	}
}
