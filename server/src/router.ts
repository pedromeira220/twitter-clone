import { Router } from "express";

const router = Router();

router.post("/user/create", (req, res) => {
	return res.status(200).send("Hello world!");
});

export { router };
