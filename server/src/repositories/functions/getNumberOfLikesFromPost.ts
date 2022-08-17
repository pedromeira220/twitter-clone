import { prisma } from "../prisma";

type IGetNumberOfLikesRequest = {
	post_id: string;
};

export async function getNumberOfLikesFromPost({
	post_id,
}: IGetNumberOfLikesRequest) {
	try {
		const postFound = await prisma.post.findFirst({
			where: {
				id: post_id,
			},
		});

		console.log(postFound);

		if (!postFound) {
			return null;
		}

		const numberOfLikesFromPost = await prisma.like.count({
			where: {
				postId: postFound.id,
			},
		});

		return numberOfLikesFromPost;
	} catch (error) {
		console.error(error);

		return null;
	}
}
