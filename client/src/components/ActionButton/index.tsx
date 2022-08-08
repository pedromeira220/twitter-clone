import { SvgProperties } from "csstype";
import React from "react";
import { theme } from "../../public/theme";
import { ButtonLight } from "../ButtonLight";
import { TextCode } from "../Typography/TextCode";

import { Container, Text } from "./style";

type actionButtonProps = {
	numberOfClicksByOtherUsers: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
};

export function ActionButton({
	numberOfClicksByOtherUsers,
	icon,
}: actionButtonProps) {
	return (
		<Container>
			<ButtonLight hoverColor={theme.colors.redLight}>{icon}</ButtonLight>

			<Text>
				{numberOfClicksByOtherUsers && <>{numberOfClicksByOtherUsers}</>}
			</Text>
		</Container>
	);
}
