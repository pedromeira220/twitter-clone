import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./style";

import { ImageSquare } from "phosphor-react";
import { theme } from "../../public/theme";

type buttonLightProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	hoverColor: string;
};

export function ButtonLight({
	children,
	hoverColor,
	...rest
}: buttonLightProps) {
	return (
		<Container {...rest} hoverColor={hoverColor}>
			{children}
		</Container>
	);
}
