import React, { useEffect, useState } from "react";
import { theme } from "../../public/theme";
import { ActionButton } from "../ActionButton";
import { TweetImage } from "../TweetImage";
import { TextBodyBold } from "../Typography/TextBodyBold";
import { TextCode } from "../Typography/TextCode";

import dayjs from "dayjs";

import {
	ActionButtonsContainer,
	Container,
	Main,
	PostTime,
	TweetText,
	UserIdentifier,
	UserInfo,
	Username,
	Dot,
} from "./style";

import { Heart } from "phosphor-react";
import { tweetProps, userProps } from "../../@types/types";
import { apiBackendFunctions } from "../../services/apiBackend";

//NOTE: Fix the post time

type tweetContent = {
	tweets: tweetProps[];
	tweet: tweetProps;
	contentText: string;
	image?: string;
	numberOfLikes: number;
	user: userProps;
	creationDate: Date;
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export function TweetContent({
	contentText,
	image,
	numberOfLikes,
	user,
	setTweetsList,
	creationDate,
	tweet,
}: tweetContent) {
	const [postTime, setPostTime] = useState(new Date());
	const [canLikeTweet, setCanLikeTweet] = useState(true);
	const [numberOfLikesUpdated, setNumberOfLikesUpdated] = useState(0);
	const [wasButtonLikeClicked, setWasButtonLikeClicked] = useState(false);

	async function handleLikeButtonClick() {
		if (wasButtonLikeClicked) {
			setNumberOfLikesUpdated((state) => {
				if (canLikeTweet) {
					return state + 1;
				}
				return state;
			});
			if (canLikeTweet) {
				await apiBackendFunctions.likeAPost({
					post_id: tweet.data.id,
					username_identifier: user.identifier,
				});
				setCanLikeTweet(false);
			}
		} else {
			await apiBackendFunctions.unlikeAPost({
				post_id: tweet.data.id,
				username_identifier: user.identifier,
			});
			setCanLikeTweet(true);
			setNumberOfLikesUpdated((state) => state - 1);
		}

		setWasButtonLikeClicked((state) => !state);
	}

	useEffect(() => {
		setPostTime(new Date(creationDate.getTime()));
		loadData();

		async function loadData() {
			setNumberOfLikesUpdated(numberOfLikes);
			setCanLikeTweet(
				await apiBackendFunctions.canUserLikePost({
					post_id: tweet.data.id,
					username_identifier: user.identifier,
				})
			);
			setWasButtonLikeClicked(canLikeTweet);
		}
	}, []);

	return (
		<Container>
			<Main>
				<UserInfo>
					<Username>
						<TextBodyBold>{user.name}</TextBodyBold>
					</Username>
					<UserIdentifier>
						<TextCode fontSize="15px" textColor={theme.colors.theme.middleGray}>
							{`@${user.identifier}`}
						</TextCode>
					</UserIdentifier>
					<span
						style={{
							marginRight: 4,
							marginLeft: 4,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Dot />
					</span>

					<PostTime>
						<TextCode fontSize="15px" textColor={theme.colors.theme.middleGray}>
							<span>{`Postado em ${dayjs(postTime).format(
								"DD/MM/YYYY hh:mm:ss"
							)}`}</span>
						</TextCode>
					</PostTime>
				</UserInfo>
				<TweetText>
					<TextCode fontSize="15px">{contentText}</TextCode>
				</TweetText>
			</Main>
			{image && (
				<>
					<TweetImage />
				</>
			)}
			<ActionButtonsContainer>
				<ActionButton
					onClick={handleLikeButtonClick}
					icon={
						<Heart
							size={19}
							color={
								canLikeTweet ? theme.colors.theme.middleGray : theme.colors.main._100
							}
						/>
					}
					numberOfClicksByOtherUsers={(numberOfLikesUpdated >= 1000
						? `${numberOfLikesUpdated / 1000}k`
						: numberOfLikesUpdated
					).toString()}
				/>
			</ActionButtonsContainer>
		</Container>
	);
}

/* 

function handleLikeButtonClick() {
		setTweetsList((tweetListState) => {
			const newTweetList = tweetListState.map((currentTweet) => {
				if (currentTweet.data.id == tweet.data.id && canLikeTweet) {
					const tweetToReturn = {
						...currentTweet.data,
						numberOfLikes: numberOfLikes + 1,
					};

					setCanLikeTweet(false);
					apiBackendFunctions.likeAPost({
						post_id: currentTweet.data.id,
						username_identifier: user.identifier,
					});

					return { data: tweetToReturn };
				}

				return currentTweet;
			});

			return newTweetList;
		});
	}
*/
