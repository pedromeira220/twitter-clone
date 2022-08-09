import React, { ButtonHTMLAttributes } from "react";
import { theme } from "../../public/theme";
import { ButtonLight } from "../ButtonLight";

import { Container, Text } from "./style";

type actionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	numberOfClicksByOtherUsers: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
};

export function ActionButton({
	numberOfClicksByOtherUsers,
	icon,
	...rest
}: actionButtonProps) {
	return (
		<Container>
			<ButtonLight {...rest} hoverColor={theme.colors.redLight}>
				{icon}
			</ButtonLight>

			<Text>
				{numberOfClicksByOtherUsers && <>{numberOfClicksByOtherUsers}</>}
			</Text>
		</Container>
	);
}
