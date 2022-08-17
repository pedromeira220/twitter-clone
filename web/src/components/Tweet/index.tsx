import React from "react";
import { tweetProps } from "../../@types/types";
import { ProfilePicture } from "../ProfilePicture";
import { TweetContent } from "../TweetContent";
import { Container, Body, ProfilePictureContainer } from "./style";

type tweetComponentProps = {
	tweets: tweetProps[];
	tweet: tweetProps;
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export function Tweet({ tweet, setTweetsList, tweets }: tweetComponentProps) {
	const { content, creationDate, numberOfLikes, user } = tweet.data;

	return (
		<Container>
			<Body>
				<ProfilePictureContainer>
					<ProfilePicture
						altText={"Profile picture of user " + user.name}
						source={user.profile_picture}
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
