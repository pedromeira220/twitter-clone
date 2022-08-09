import React, { useEffect, useState } from "react";
import { theme } from "../../public/theme";
import { ActionButton } from "../ActionButton";
import { TweetImage } from "../TweetImage";
import { TextBodyBold } from "../Typography/TextBodyBold";
import { TextCode } from "../Typography/TextCode";
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
import { tweetProps, userProps } from "../Tweet";

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

	function handleLikeButtonClick() {
		setTweetsList((tweetListState) => {
			const newTweetList = tweetListState.map((currentTweet) => {
				if (currentTweet.data.id == tweet.data.id) {
					const tweetToReturn = {
						...currentTweet.data,
						numberOfLikes: numberOfLikes + 1,
					};

					return { data: tweetToReturn };
				}

				return currentTweet;
			});

			return newTweetList;
		});
	}

	useEffect(() => {
		const currentDate = new Date();

		setPostTime(new Date(currentDate.getTime() - creationDate.getTime()));
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
							<span>{postTime.getHours()}h</span>
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
					icon={<Heart size={19} color={theme.colors.theme.middleGray} />}
					numberOfClicksByOtherUsers={numberOfLikes}
				/>
			</ActionButtonsContainer>
		</Container>
	);
}
