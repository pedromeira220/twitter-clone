import { prisma } from "../prisma";

type IFindByIdRequest = {
	user_id: string;
};

export async function findUserById({ user_id }: IFindByIdRequest) {
	try {
		const userFond = await prisma.user.findFirst({
			where: {
				id: user_id,
			},
		});

		return { userFond, errorMsg: "User not found" };
	} catch (error) {
		console.error(error);

		return { userFond: null, errorMsg: "User not found" };
	}
}
