import { Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post("/user/create", (req, res) => {
	return createUserController.handle(req, res);
});

export { router };
