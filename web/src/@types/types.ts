export type userProps = {
	name: string;
	identifier: string;
	profile_picture: string;
	email: string;
	id?: string;
};

export type tweetProps = {
	data: {
		id: string;
		user: userProps;
		creationDate: Date;
		content: string;
		numberOfLikes: number;
		user_id: string;
	};
};
