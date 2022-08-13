import { Post } from "../../entities/Post";
import { prisma } from "../prisma";

export async function insertPost({ text_content, title, user_id }: Post) {
	try {
		const postCreated = await prisma.post.create({
			data: {
				created_at: new Date(),
				text_content: text_content,
				title,
				userId: user_id,
			},
		});

		return postCreated;
	} catch (error) {
		console.error(error);
		return null;
	}
}
