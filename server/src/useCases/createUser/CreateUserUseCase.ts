import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { IError } from "./IError";

export interface ICreateUserRequestDTO {
	name: string;
	email: string;
	profile_picture: string;
	identifier: string;
}

export class CreateUserUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	async execute(data: ICreateUserRequestDTO): Promise<User | IError> {
		await this.checkIfUserExists(data);

		const user = new User(data);

		return await this.usersRepository.save(user);
	}

	private async checkIfUserExists(user: ICreateUserRequestDTO) {
		const emailIsAlreadyInUse = await this.usersRepository.findByEmail(
			user.email
		);
		const identifierIsAlreadyInUse = await this.usersRepository.findByIdentifier(
			user.identifier
		);

		if (emailIsAlreadyInUse) {
			throw new Error("User already exists");
		}

		if (identifierIsAlreadyInUse) {
			throw new Error("Username already in use");
		}
	}
}
