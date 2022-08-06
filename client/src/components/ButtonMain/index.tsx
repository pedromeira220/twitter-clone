import React from "react";
import { TextBodyBold } from "../Typography/TextBodyBold";

import { Container, Title } from "./style";

type buttonMainProps = {
	text: string;
	width?: string;
};

export function ButtonMain({ text, width }: buttonMainProps) {
	return (
		<Container width={width}>
			<Title>
				<TextBodyBold>{text}</TextBodyBold>
			</Title>
		</Container>
	);
}
