import { WifiX } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { tweetProps, userProps } from "../../@types/types";
import { theme } from "../../public/theme";
import { apiBackendFunctions } from "../../services/apiBackend";
import { UserContext } from "../../utils/contexts/userContext";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";
import { Loading } from "../Loading";

import { PostInput } from "../PostInput";
import { TextCode } from "../Typography/TextCode";

import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar, LoadingContainer } from "./style";

export function Timeline() {
	const user = useContext(UserContext);

	const newUser: userProps = {
		email: "teste@teste.com",
		identifier: "testName",
		name: "usuario teste",
		profile_picture: "https://github.com/rocketseat.png",
	};

	const [tweetsList, setTweetsList] = useState<tweetProps[]>([]);
	const [isLoadingData, setIsLoadingData] = useState(false);
	const [hasInternetConnection, setHasInternetConnection] = useState(true);

	useEffect(() => {
		async function loadData() {
			setIsLoadingData(true);
			const { tweetList: tweetListFromResponse, hasConnection } =
				await apiBackendFunctions.getAllPosts();

			console.log("Tweet list from response", tweetListFromResponse);

			const sanitatedTweetList: tweetProps[] = tweetListFromResponse.map(
				(tweetFromResponse) => {
					const newTweet: tweetProps = {
						data: {
							content: tweetFromResponse.text_content,
							creationDate: new Date(tweetFromResponse.created_at),
							id: tweetFromResponse.id,
							numberOfLikes: tweetFromResponse.numberOfLikes,
							user: tweetFromResponse.user,
							user_id: user.id || "",
						},
					};

					return newTweet;
				}
			);
			setHasInternetConnection(hasConnection);
			setTweetsList(sanitatedTweetList);

			setIsLoadingData(false);

			console.log("Tweet list", tweetsList);
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
				<LoadingContainer>
					<Loading />
				</LoadingContainer>
			) : (
				<>
					{hasInternetConnection ? (
						<>
							<>
								<FeedTimeline
									user={user}
									tweets={tweetsList}
									setTweetsList={setTweetsList}
								/>
							</>
						</>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								gap: "1rem",
								padding: 24,
							}}
						>
							<TextCode>no internet</TextCode>
							<WifiX size={40} color={theme.colors.theme.light} />
						</div>
					)}
				</>
			)}
		</Container>
	);
}

/*

*/
