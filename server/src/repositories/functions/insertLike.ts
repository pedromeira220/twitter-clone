import { Like } from "../../entities/Like";
import { prisma } from "../prisma";

type ICreateLikeRequest = {
	username_identifier: string;
	post_id: string;
};

export async function insertLike({
	username_identifier,
	post_id,
}: ICreateLikeRequest) {
	try {
		const userFound = await prisma.user.findFirst({
			where: {
				identifier: username_identifier,
			},
		});

		if (!userFound) {
			return null;
		}

		const checkIfLikeExists = await prisma.like.findFirst({
			where: {
				userId: userFound.id,
				postId: post_id,
			},
		});

		if (checkIfLikeExists) {
			return null;
		}

		const like = await prisma.like.create({
			data: {
				userId: userFound.id,
				postId: post_id,
			},
		});

		return like;
	} catch (error) {
		console.error(error);
		return null;
	}
}
