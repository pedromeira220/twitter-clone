import { Like } from "../../entities/Like";
import { prisma } from "../prisma";

export async function insertLike({ user_id, post_id }: Like) {
	try {
		const checkIfLikeExists = await prisma.like.findFirst({
			where: {
				userId: user_id,
				postId: post_id,
			},
		});

		if (checkIfLikeExists) {
			return null;
		}

		const like = await prisma.like.create({
			data: {
				userId: user_id,
				postId: post_id,
			},
		});

		return like;
	} catch (error) {
		console.error(error);
		return null;
	}
}
