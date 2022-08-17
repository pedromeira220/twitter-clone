import { prisma } from "../prisma";

type ICanUserLikePostRequest = {
	username_identifier: string;
	post_id: string;
};

export async function canUserLikePost({
	post_id,
	username_identifier,
}: ICanUserLikePostRequest) {
	try {
		//check if the user and the post exists

		const checkIfUserExists = await prisma.user.findFirst({
			where: {
				identifier: username_identifier,
			},
		});

		if (!checkIfUserExists) {
			return false;
		}

		const checkIfPostExists = await prisma.post.findFirst({
			where: {
				id: post_id,
			},
		});

		if (!checkIfPostExists) {
			return false;
		}

		const ifUserAlreadyLikeThePost = await prisma.like.findFirst({
			where: {
				userId: checkIfUserExists.id,
				postId: post_id,
			},
		});

		return ifUserAlreadyLikeThePost ? false : true;
	} catch (error) {
		console.error(error);

		return false;
	}
}
