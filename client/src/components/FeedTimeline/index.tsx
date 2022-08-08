import React from "react";
import { Tweet, tweetProps } from "../Tweet";
import { Container } from "./style";

export function FeedTimeline() {
	const tweets: Array<tweetProps> = [
		{
			data: {
				user: {
					identifier: "pedromeira",
					name: "Pedro Meira",
					profilePicture: "https://github.com/petergamer8k.png",
				},
				content:
					"If you want to write efficient JavaScript code, try breaking things down into smaller pieces. And @JoyShaheb can help you do that. In this illustrated guide, he teaches you callbacks, promises, and async/await in JS by building an ice cream shop.",
				creationDate: new Date(),
				numberOfLikes: 12,
			},
		},
	];

	return (
		<Container>
			{tweets.map((tweet) => {
				return <Tweet data={tweet.data} key={tweet.data.user.identifier} />;
			})}
		</Container>
	);
}
