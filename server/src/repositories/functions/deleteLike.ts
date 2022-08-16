import { Like } from "../../entities/Like";
import { prisma } from "../prisma";

type IDeleteLikeRequest = {
	post_id: string;
	username_identifier: string;
};

export async function deleteLike({
	post_id,
	username_identifier,
}: IDeleteLikeRequest) {
	try {
		const userFound = await prisma.user.findFirst({
			where: {
				identifier: username_identifier,
			},
		});

		if (!userFound) {
			return null;
		}

		const likeFound = await prisma.like.findFirst({
			where: {
				postId: post_id,
				userId: userFound.id,
			},
		});

		if (!likeFound) {
			return null;
		}

		const like_id = likeFound.id;

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
