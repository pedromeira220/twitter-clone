import React, { ReactNode } from "react";

type textCodeProps = {
	children: ReactNode;
	textColor: string;
};

import { Text } from "./style";

export function TextCode({ children, textColor }: textCodeProps) {
	return <Text textColor={textColor}> {children}</Text>;
}
