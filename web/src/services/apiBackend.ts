import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
	? import.meta.env.VITE_BASE_URL
	: "http://localhost:3333";

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
};
