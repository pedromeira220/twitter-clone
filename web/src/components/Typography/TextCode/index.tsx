import React, { ReactNode } from "react";
import { theme } from "../../../public/theme";

type textCodeProps = {
	children: ReactNode;
	textColor?: string;
	fontSize?: string;
};

import { Text } from "./style";

export function TextCode({
	children,
	textColor = theme.colors.theme.light,
	fontSize = "20px",
}: textCodeProps) {
	return (
		<Text fontSize={fontSize} textColor={textColor}>
			{" "}
			{children}
		</Text>
	);
}
