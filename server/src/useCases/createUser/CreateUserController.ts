import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

import { IResponseJSON } from "../IResponseJSON";
import { IError } from "./IError";

export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, profile_picture, identifier } = await request.body;

		try {
			const responseJson: IResponseJSON = {
				error: false,
				msg: "",
			};

			if (!name) {
				responseJson.error = true;
				responseJson.msg = "The name is required";

				return response.status(422).json(responseJson);
			}

			if (!email) {
				responseJson.error = true;
				responseJson.msg = "The email is required";

				return response.status(422).json(responseJson);
			}

			if (!profile_picture) {
				responseJson.error = true;
				responseJson.msg = "The profile picture is required";

				return response.status(422).json(responseJson);
			}

			if (!identifier) {
				responseJson.error = true;
				responseJson.msg = "The identifier is required";

				return response.status(422).json(responseJson);
			}

			await this.createUserUseCase.execute({
				email,
				identifier,
				profile_picture,
				name,
			});

			responseJson.error = false;
			responseJson.msg = "User was created successfully";

			return response.status(201).json(responseJson);
		} catch (e) {
			const error = e as IError;

			const errorMessage = error?.message ? error.message : "Unexpected error";

			const responseJson: IResponseJSON = {
				error: true,
				msg: errorMessage,
			};

			return response.status(400).json(responseJson);
		}
	}
}
