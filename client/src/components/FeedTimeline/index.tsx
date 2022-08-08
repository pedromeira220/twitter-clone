import React from "react";
import { Tweet, tweetProps, userProps } from "../Tweet";
import { Container } from "./style";

type feedTimelineProps = {
	user: userProps;
	tweets: tweetProps[];
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export function FeedTimeline({ user, tweets }: feedTimelineProps) {
	return (
		<Container>
			{tweets.map((tweet) => {
				return <Tweet data={tweet.data} key={tweet.data.user.identifier} />;
			})}
		</Container>
	);
}
