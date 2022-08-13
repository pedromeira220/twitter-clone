import { prisma } from "../prisma";

export async function getAllPosts() {
	try {
		const postList = await prisma.post.findMany({});

		return postList;
	} catch (error) {
		console.error(error);
		return null;
	}
}
