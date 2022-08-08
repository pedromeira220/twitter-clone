import React, { useState } from "react";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";

import { PostInput } from "../PostInput";
import { tweetProps, userProps } from "../Tweet";
import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar } from "./style";

export function Timeline() {
	const user: userProps = {
		identifier: "pedromeira",
		name: "Pedro Meira",
		profilePicture: "https://github.com/petergamer8k.png",
	};

	return (
		<Container>
			<TopBar>
				<TitleBold text="Home" />
			</TopBar>
			<PostInput />
			<BigSeparator />
			<FeedTimeline />
		</Container>
	);
}
