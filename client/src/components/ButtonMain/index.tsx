import React, { ButtonHTMLAttributes } from "react";
import { TextBodyBold } from "../Typography/TextBodyBold";

import { Container, Title } from "./style";

type buttonMainProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	width?: string;
};

export function ButtonMain({ text, width, ...rest }: buttonMainProps) {
	return (
		<Container {...rest} width={width}>
			<Title>
				<TextBodyBold>{text}</TextBodyBold>
			</Title>
		</Container>
	);
}
