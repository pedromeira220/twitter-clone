import React, { useEffect, useState } from "react";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";

import { PostInput } from "../PostInput";
import { tweetProps, userProps } from "../Tweet";
import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar } from "./style";

export function Timeline() {
	const user: userProps = {
		identifier: "pedromeira220",
		name: "Pedro Meira",
		profilePicture: "https://github.com/petergamer8k.png",
	};
	const tweets: tweetProps[] = [
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 1,
				content:
					"If you want to write efficient JavaScript code, try breaking things down into smaller pieces. And @JoyShaheb can help you do that. In this illustrated guide, he teaches you callbacks, promises, and async/await in JS by building an ice cream shop.",
				creationDate: new Date(),
				numberOfLikes: 12,
			},
		},
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 2,
				content: "Hello world",
				creationDate: new Date(),
				numberOfLikes: 120,
			},
		},
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 3,
				content: "Tweet test",
				creationDate: new Date(),
				numberOfLikes: 1200,
			},
		},
	];

	const [tweetsList, setTweetsList] = useState<tweetProps[]>(tweets);

	useEffect(() => {
		console.log(tweetsList);
	}, [tweetsList]);

	return (
		<Container>
			<TopBar>
				<TitleBold text="Home" />
			</TopBar>
			<PostInput user={user} tweets={tweetsList} setTweetsList={setTweetsList} />
			<BigSeparator />
			<FeedTimeline
				user={user}
				tweets={tweetsList}
				setTweetsList={setTweetsList}
			/>
		</Container>
	);
}
