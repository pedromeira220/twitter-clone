import { Router } from "express";
import { canUserLikePost } from "./repositories/functions/canUserLikePost";
import { deleteLike } from "./repositories/functions/deleteLike";
import { deletePost } from "./repositories/functions/deletePost";
import { findByEmail } from "./repositories/functions/findByEmail";
import { findByIdentifier } from "./repositories/functions/findByIdentifier";
import { getAllPosts } from "./repositories/functions/getAllPosts";
import { getNumberOfLikesFromPost } from "./repositories/functions/getNumberOfLikesFromPost";
import { insertLike } from "./repositories/functions/insertLike";
import { insertPost } from "./repositories/functions/insertPost";
import { insertUser } from "./repositories/functions/insertUser";
import { crypto } from "./services/crypto";

const router = Router();

router.post("/user/register", async (req, res) => {
	const { name, email, profile_picture, identifier, password } = req.body;

	if (!name) {
		return res.status(422).json({ error: true, msg: "The name is required" });
	}

	if (!email) {
		return res.status(422).json({ error: true, msg: "The email is required" });
	}

	if (!profile_picture) {
		return res
			.status(422)
			.json({ error: true, msg: "The profile picture is required" });
	}

	if (!identifier) {
		return res.status(422).json({ error: true, msg: "The username is required" });
	}

	if (!password) {
		return res.status(422).json({ error: true, msg: "The password is required" });
	}

	const emailAlreadyInUse = await findByEmail(email);

	if (emailAlreadyInUse) {
		return res.status(422).json({ error: true, msg: "Email already in use" });
	}

	const identifierAlreadyInUse = await findByIdentifier(identifier);

	if (identifierAlreadyInUse) {
		return res.status(422).json({ error: true, msg: "Username already in use" });
	}

	const cryptoPassword = crypto.encrypt(password);

	const userCreated = await insertUser({
		email,
		identifier,
		name,
		profile_picture,
		password: cryptoPassword,
	});

	return res.status(201).json({ error: false, data: userCreated });
});

router.post("/user/create_post", async (req, res) => {
	const { title, text_content, username_identifier } = req.body;

	if (!title) {
		return res
			.status(422)
			.json({ error: true, msg: "The title of the post is required" });
	}

	if (!text_content) {
		return res
			.status(422)
			.json({ error: true, msg: "The content of the post is required" });
	}

	if (!username_identifier) {
		return res.status(422).json({
			error: true,
			msg: "The username identifier of the post is required",
		});
	}

	const postCreated = await insertPost({
		text_content,
		title,
		username_identifier,
	});

	if (!postCreated) {
		return res
			.status(500)
			.json({ error: true, msg: "Internal server error, try again later" });
	}

	return res.status(201).json({ error: false, data: postCreated });
});

router.get("/get_all_posts", async (req, res) => {
	const postList = await getAllPosts();

	if (!postList) {
		return res
			.status(500)
			.json({ error: true, msg: "Internal server error, try again later" });
	}

	return res.status(200).json({ data: postList });
});

router.post("/user/like_a_post", async (req, res) => {
	const { username_identifier, post_id } = req.body;

	if (!username_identifier) {
		return res
			.status(422)
			.json({ error: true, msg: "The username identifier is required" });
	}

	if (!post_id) {
		return res.status(422).json({ error: true, msg: "The post id is required" });
	}

	const likeCreated = await insertLike({ post_id, username_identifier });

	if (!likeCreated) {
		return res
			.status(500)
			.json({ error: true, msg: "Internal server error, try again later" });
	}

	return res.status(201).json({ data: likeCreated });
});

router.delete("/user/unlike_post", async (req, res) => {
	const { username_identifier, post_id } = req.body;

	if (!username_identifier) {
		return res
			.status(422)
			.json({ error: true, msg: "The username identifier is required" });
	}

	if (!post_id) {
		return res.status(422).json({ error: true, msg: "The post id is required" });
	}

	const likeDeleted = await deleteLike({ post_id, username_identifier });

	if (!likeDeleted) {
		return res.status(422).json({ error: true, msg: "Internal server error" });
	}

	return res.status(200).json({ error: false, data: likeDeleted });
});

router.delete("/user/delete_post", async (req, res) => {
	const { post_id } = req.body;

	if (!post_id) {
		return res.status(422).json({ error: true, msg: "The post id is required" });
	}

	const deletedPost = await deletePost({ post_id });

	if (!deletedPost) {
		return res.status(500).json({ error: true, msg: "Internal server error" });
	}

	return res.status(200).json({ error: false, data: deletePost });
});

router.get("/user/get_like_from_post/:post_id", async (req, res) => {
	const { post_id } = req.params;

	if (!post_id) {
		return res.status(422).json({ error: false, msg: "The post id is required" });
	}

	const numberOfLikesFromPost = await getNumberOfLikesFromPost({ post_id });

	console.log(numberOfLikesFromPost);

	if (numberOfLikesFromPost == null) {
		return res.status(500).json({
			error: true,
			msg: "Post not found, try again later or test another post id",
		});
	}

	return res.status(200).json({
		error: false,
		data: {
			postId: post_id,
			numberOfLikesFromPost,
		},
	});
});

router.get(
	"/user/can_user_like_post/post_id=:post_id/username_identifier=:username_identifier",
	async (req, res) => {
		const { username_identifier, post_id } = req.params;

		if (!username_identifier) {
			return res
				.status(422)
				.json({ error: true, msg: "The username identifier is required" });
		}

		if (!post_id) {
			return res.status(422).json({ error: true, msg: "The post id is required" });
		}

		const checkIfUserCanLikePost = await canUserLikePost({
			post_id,
			username_identifier,
		});

		return res.status(200).json({
			error: false,
			data: {
				canUserLikePost: checkIfUserCanLikePost,
			},
		});
	}
);

export { router };
