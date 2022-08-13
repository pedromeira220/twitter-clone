import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { SessionUserRepository } from "../../repositories/implementations/SessionUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const sessionUserRepository = new SessionUserRepository();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
