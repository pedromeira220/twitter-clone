import { Post } from "../../entities/Post";
import { prisma } from "../prisma";

type ICreatePostRequest = {
	text_content: string;
	title: string;
	username_identifier: string;
};

export async function insertPost({
	text_content,
	title,
	username_identifier,
}: ICreatePostRequest) {
	try {
		const userFound = await prisma.user.findFirst({
			where: {
				identifier: username_identifier,
			},
		});

		if (!userFound) {
			return null;
		}

		const postCreated = await prisma.post.create({
			data: {
				created_at: new Date(),
				text_content: text_content,
				title,
				userId: userFound?.id,
			},
		});

		return postCreated;
	} catch (error) {
		console.error(error);
		return null;
	}
}
