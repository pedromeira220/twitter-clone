import { prisma } from "../prisma";

export async function findByEmail(email: string) {
	const userFound = await prisma.user.findFirst({
		where: {
			email: email,
		},
	});

	return userFound;
}
