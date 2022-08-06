import React from "react";
import { TextBodyBold } from "../TextBodyBold";

import { Container, Title } from "./style";

type buttonMainProps = {
	text: string;
};

export function ButtonMain({ text }: buttonMainProps) {
	return (
		<Container>
			<Title>
				<TextBodyBold>{text}</TextBodyBold>
			</Title>
		</Container>
	);
}
