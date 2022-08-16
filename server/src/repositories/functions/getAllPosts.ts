import { prisma } from "../prisma";

export async function getAllPosts() {
	type postToReturn = {
		title: string;
		id: string;
		text_content: string;
		created_at: Date;
		numberOfLikes: number;
	};

	try {
		const postList = await prisma.post.findMany({
			select: {
				title: true,
				id: true,
				text_content: true,
				created_at: true,
			},
			orderBy: {
				created_at: "desc",
			},
		});

		const postListToReturn = await Promise.all(
			postList.map(async (post) => {
				const numberOfLikes = await prisma.like.count({
					where: {
						postId: post.id,
					},
				});

				const newPost: postToReturn = {
					created_at: post.created_at,
					id: post.id,
					numberOfLikes: numberOfLikes,
					text_content: post.text_content,
					title: post.title,
				};

				return newPost;
			})
		);

		return postListToReturn;
	} catch (error) {
		console.error(error);
		return null;
	}
}
