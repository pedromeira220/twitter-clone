import { prisma } from "../prisma";

export async function findByIdentifier(identifier: string) {
	const userFound = await prisma.user.findFirst({
		where: {
			identifier: identifier,
		},
		select: {
			id: true,
			name: true,
			identifier: true,
		},
	});

	return userFound;
}
