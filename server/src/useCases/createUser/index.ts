import { SessionUserRepository } from "../../repositories/implementations/SessionUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const sessionUserRepository = new SessionUserRepository();

const createUserUseCase = new CreateUserUseCase(sessionUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
