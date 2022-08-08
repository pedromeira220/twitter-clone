import React from "react";
import { ProfilePicture } from "../ProfilePicture";
import { TweetContent } from "../TweetContent";
import { Container, Body, ProfilePictureContainer } from "./style";

export function Tweet() {
	const tweetText =
		"If you want to write efficient JavaScript code, try breaking things down into smaller pieces. And @JoyShaheb can help you do that. In this illustrated guide, he teaches you callbacks, promises, and async/await in JS by building an ice cream shop.";

	return (
		<Container>
			<Body>
				<ProfilePictureContainer>
					<ProfilePicture
						altText="User profile picture"
						source="https://github.com/petergamer8k.png"
					/>
				</ProfilePictureContainer>
				<TweetContent>{tweetText}</TweetContent>
			</Body>
		</Container>
	);
}
