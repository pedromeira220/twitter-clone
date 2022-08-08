import React from "react";
import { ProfilePicture } from "../ProfilePicture";
import { TweetContent } from "../TweetContent";
import { Container, Body, ProfilePictureContainer } from "./style";

export type tweetProps = {
	data: {
		user: userProps;
		creationDate: Date;
		content: string;
		numberOfLikes: number;
	};
};

export type userProps = {
	name: string;
	identifier: string;
	profilePicture: string;
};

export function Tweet({ data }: tweetProps) {
	const { content, creationDate, numberOfLikes, user } = data;

	return (
		<Container>
			<Body>
				<ProfilePictureContainer>
					<ProfilePicture
						altText={"Profile picture of user " + user.name}
						source={user.profilePicture}
					/>
				</ProfilePictureContainer>
				<TweetContent
					creationDate={creationDate}
					user={user}
					numberOfLikes={numberOfLikes}
					contentText={content}
				/>
			</Body>
		</Container>
	);
}
