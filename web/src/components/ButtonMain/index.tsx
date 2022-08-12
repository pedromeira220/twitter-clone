import React, { ButtonHTMLAttributes } from "react";
import { TextBodyBold } from "../Typography/TextBodyBold";

import { Container, Title } from "./style";

type buttonMainProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	width?: string;
};

export function ButtonMain({ text, width,disabled,  ...rest }: buttonMainProps) {
	return (
		<Container disabled={disabled} {...rest} width={width}>
			<Title disabled={disabled}>
				<TextBodyBold>{text}</TextBodyBold>
			</Title>
		</Container>
	);
}
