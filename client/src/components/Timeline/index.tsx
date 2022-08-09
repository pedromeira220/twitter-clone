import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/contexts/userContext";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";

import { PostInput } from "../PostInput";
import { tweetProps, userProps } from "../Tweet";
import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar } from "./style";

export function Timeline() {
	const creationDate = new Date(2022, 7, 9, 15, 0, 0, 0);

	const user = useContext(UserContext);

	const tweets: tweetProps[] = [
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 1,
				content:
					"If you want to write efficient JavaScript code, try breaking things down into smaller pieces. And @JoyShaheb can help you do that. In this illustrated guide, he teaches you callbacks, promises, and async/await in JS by building an ice cream shop.",
				creationDate: creationDate,
				numberOfLikes: 12,
			},
		},
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 2,
				content: "Hello world",
				creationDate: creationDate,
				numberOfLikes: 120,
			},
		},
		{
			data: {
				user: user,
				id: new Date().getTime().toString() + 3,
				content: "Tweet test",
				creationDate: creationDate,
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
