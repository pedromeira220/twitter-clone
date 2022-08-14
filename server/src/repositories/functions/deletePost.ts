import { prisma } from "../prisma";

type deletePostProps = {
	post_id: string;
};

export async function deletePost({ post_id }: deletePostProps) {
	try {
		const deletedPost = await prisma.post.delete({
			where: {
				id: post_id,
			},
		});

		return deletedPost;
	} catch (error) {
		console.error(error);
		return null;
	}
}
