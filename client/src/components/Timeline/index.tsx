import React from "react";
import { BigSeparator } from "../BigSeparator";
import { FeedTimeline } from "../FeedTimeline";

import { PostInput } from "../PostInput";
import { TitleBold } from "../Typography/TextTitleBold";

import { Container, TopBar } from "./style";

export function Timeline() {
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
