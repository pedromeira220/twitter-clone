import React, { ReactNode } from "react";

import { Container } from "./style";

import { ImageSquare } from "phosphor-react";
import { theme } from "../../public/theme";

type buttonLightProps = {
	children: ReactNode;
	hoverColor: string;
};

export function ButtonLight({ children, hoverColor }: buttonLightProps) {
	return <Container hoverColor={hoverColor}>{children}</Container>;
}
