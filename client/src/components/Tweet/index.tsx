import React from "react";
import { ProfilePicture } from "../ProfilePicture";
import { TweetContent } from "../TweetContent";
import { Container, Body, ProfilePictureContainer } from "./style";

export type tweetProps = {
	data: {
		id: string;
		user: userProps;
		creationDate: Date;
		content: string;
		numberOfLikes: number;
	};
};

type tweetComponentProps = {
	tweets: tweetProps[];
	tweet: tweetProps;
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export type userProps = {
	name: string;
	identifier: string;
	profilePicture: string;
};

export function Tweet({ tweet, setTweetsList, tweets }: tweetComponentProps) {
	const { content, creationDate, numberOfLikes, user } = tweet.data;

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
					tweets={tweets}
					tweet={tweet}
					setTweetsList={setTweetsList}
					creationDate={creationDate}
					user={user}
					numberOfLikes={numberOfLikes}
					contentText={content}
				/>
			</Body>
		</Container>
	);
}
