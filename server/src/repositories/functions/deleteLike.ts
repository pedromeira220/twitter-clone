import { Like } from "../../entities/Like";
import { prisma } from "../prisma";

export async function deleteLike({ post_id, user_id }: Like) {
	try {
		const likeFound = await prisma.like.findFirst({
			where: {
				postId: post_id,
				userId: user_id,
			},
		});

		const like_id = likeFound?.id;

		const likeDeleted = await prisma.like.delete({
			where: {
				id: like_id,
			},
		});
		return likeDeleted;
	} catch (error) {
		console.error(error);
		return null;
	}
}
