import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
	? import.meta.env.VITE_BASE_URL
	: "http://localhost:3333";

export const apiBackend = axios.create({
	baseURL: BASE_URL,
});

export const apiBackendFunctions = {
	getAllPosts: async () => {
		type tweetList = {
			created_at: string;
			id: string;
			numberOfLikes: number;
			text_content: string;
			title: string;
		};

		type IResponse = {
			data: tweetList[];
		};

		try {
			const response = await apiBackend.get("/get_all_posts");

			const data: IResponse = response.data;

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
