import React, { ReactNode } from "react";

type textBoldProps = {
	children: ReactNode;
};

import { Text } from "./style";

export function TextBodyBold({ children }: textBoldProps) {
	return <Text>{children}</Text>;
}
