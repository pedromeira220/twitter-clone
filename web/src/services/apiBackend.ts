import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
	? import.meta.env.VITE_BASE_URL
	: "http://localhost:8888";

export const apiBackend = axios.create({
	baseURL: BASE_URL,
});

type IResponse<T> = {
	data: T;
	error?: boolean;
};

type tweetList = {
	created_at: string;
	id: string;
	numberOfLikes: number;
	text_content: string;
	title: string;
};

type ICreatePostRequest = {
	title: string;
	text_content: string;
	username_identifier: string;
};

type ILikeAPostRequest = {
	username_identifier: string;
	post_id: string;
};

type ICanUserLikePostRequest = {
	post_id: string;
	username_identifier: string;
};

export const apiBackendFunctions = {
	getAllPosts: async () => {
		try {
			const response = await apiBackend.get("/get_all_posts");

			const data: IResponse<tweetList[]> = response.data;

			return data.data;
		} catch (error) {
			console.error(error);

			const returnObject: tweetList[] = [
				{
					created_at: "",
					id: "",
					numberOfLikes: 0,
					text_content: "",
					title: "",
				},
			];

			return returnObject;
		}
	},

	createPost: async ({
		title,
		text_content,
		username_identifier,
	}: ICreatePostRequest) => {
		try {
			const response = await apiBackend.post("/user/create_post", {
				title,
				text_content,
				username_identifier,
			});

			const data: IResponse<tweetList> = response.data;

			console.log("data.data", data.data);

			return data.data;
		} catch (error) {
			console.error(error);

			const returnObject: tweetList[] = [
				{
					created_at: "",
					id: "",
					numberOfLikes: 0,
					text_content: "",
					title: "",
				},
			];

			return returnObject;
		}
	},
	likeAPost: async ({ post_id, username_identifier }: ILikeAPostRequest) => {
		try {
			const response = await apiBackend.post("/user/like_a_post", {
				username_identifier: username_identifier,
				post_id: post_id,
			});

			const data: IResponse<tweetList> = response.data;

			return data.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
	canUserLikePost: async ({
		post_id,
		username_identifier,
	}: ICanUserLikePostRequest) => {
		try {
			const response = await apiBackend.get(
				`/user/can_user_like_post/post_id=${post_id}/username_identifier=${username_identifier}`
			);

			return response.data.data.canUserLikePost;
		} catch (error) {
			console.error(error);
			return false;
		}
	},
};
