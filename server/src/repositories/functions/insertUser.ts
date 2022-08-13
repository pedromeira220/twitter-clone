import { User } from "../../entities/User";
import { prisma } from "../prisma";

export async function insertUser({
	email,
	identifier,
	name,
	profile_picture,
	password,
}: User) {
	const userCreated = await prisma.user.create({
		data: {
			email,
			name,
			identifier,
			profile_picture,
			created_at: new Date(),
			password,
		},
		select: {
			email: true,
			id: true,
			name: true,
		},
	});

	return userCreated;
}
