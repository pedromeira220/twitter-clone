import React, { useContext, useEffect, useState } from "react";
import { tweetProps, userProps } from "../../@types/types";
import { apiBackendFunctions } from "../../services/apiBackend";
import { UserContext } from "../../utils/contexts/userContext";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";

import { PostInput } from "../PostInput";

import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar } from "./style";

export function Timeline() {
	const user = useContext(UserContext);

	const newUser: userProps = {
		email: "teste@teste.com",
		identifier: "testName",
		name: "usuario teste",
		profilePicture: "https://github.com/rocketseat.png",
	};

	const [tweetsList, setTweetsList] = useState<tweetProps[]>([]);
	const [isLoadingData, setIsLoadingData] = useState(false);

	useEffect(() => {
		console.log(tweetsList);
	}, [tweetsList]);

	useEffect(() => {
		async function loadData() {
			setIsLoadingData(true);
			const response = await apiBackendFunctions.getAllPosts();

			const tweetListResponse: tweetProps[] = response.map((tweetFromResponse) => {
				const newTweet: tweetProps = {
					data: {
						content: tweetFromResponse.text_content,
						creationDate: new Date(tweetFromResponse.created_at),
						id: tweetFromResponse.id,
						numberOfLikes: tweetFromResponse.numberOfLikes,
						user: newUser,
					},
				};

				console.log("Tweet criado: ", newTweet);

				return newTweet;
			});

			setTweetsList(tweetListResponse);
			setIsLoadingData(false);
		}

		loadData();
	}, []);

	return (
		<Container>
			<TopBar>
				<TitleBold text="Home" />
			</TopBar>
			<PostInput user={user} tweets={tweetsList} setTweetsList={setTweetsList} />
			<BigSeparator />
			{isLoadingData ? (
				<></>
			) : (
				<>
					<FeedTimeline
						user={user}
						tweets={tweetsList}
						setTweetsList={setTweetsList}
					/>
				</>
			)}
		</Container>
	);
}
