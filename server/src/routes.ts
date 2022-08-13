import { Router } from "express";
import { findByEmail } from "./repositories/functions/findByEmail";
import { findByIdentifier } from "./repositories/functions/findByIdentifier";
import { insertUser } from "./repositories/functions/insertUser";
import { crypto } from "./services/crypto";

const router = Router();

router.post("/user/register", async (req, res) => {
	const { name, email, profile_picture, identifier, password } = req.body;

	if (!name) {
		return res.status(422).json({ error: true, msg: "The name is required" });
	}

	if (!email) {
		return res.status(422).json({ error: true, msg: "The email is required" });
	}

	if (!profile_picture) {
		return res
			.status(422)
			.json({ error: true, msg: "The profile picture is required" });
	}

	if (!identifier) {
		return res.status(422).json({ error: true, msg: "The username is required" });
	}

	if (!password) {
		return res.status(422).json({ error: true, msg: "The password is required" });
	}

	const emailAlreadyInUse = await findByEmail(email);

	if (emailAlreadyInUse) {
		return res.status(422).json({ error: true, msg: "Email already in use" });
	}

	const identifierAlreadyInUse = await findByIdentifier(identifier);

	if (identifierAlreadyInUse) {
		return res.status(422).json({ error: true, msg: "Username already in use" });
	}

	const cryptoPassword = crypto.encrypt(password);

	const userCreated = await insertUser({
		email,
		identifier,
		name,
		profile_picture,
		password: cryptoPassword,
	});

	return res.status(201).json({ error: false, data: userCreated });
});

export { router };
