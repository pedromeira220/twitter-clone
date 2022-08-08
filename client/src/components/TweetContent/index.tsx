import React, { ReactNode } from "react";
import { theme } from "../../public/theme";
import { TweetImage } from "../TweetImage";
import { TextBodyBold } from "../Typography/TextBodyBold";
import { TextCode } from "../Typography/TextCode";
import {
	ActionButtons,
	Container,
	Main,
	PostTime,
	TweetText,
	UserIdentifier,
	UserInfo,
	Username,
	Dot,
} from "./style";

type tweetContent = {
	children: ReactNode;
	image?: string;
};

export function TweetContent({ children, image }: tweetContent) {
	return (
		<Container>
			<Main>
				<UserInfo>
					<Username>
						<TextBodyBold>Pedro Meira </TextBodyBold>
					</Username>
					<UserIdentifier>
						<TextCode fontSize="15px" textColor={theme.colors.theme.middleGray}>
							@pedromeira
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
							1h
						</TextCode>
					</PostTime>
				</UserInfo>
				<TweetText>
					<TextCode fontSize="15px">{children}</TextCode>
				</TweetText>
			</Main>
			{image && (
				<>
					<TweetImage />
				</>
			)}
			<ActionButtons></ActionButtons>
		</Container>
	);
}
