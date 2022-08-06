import React from "react";

import { Container } from "./style";

import { ImageSquare } from "phosphor-react";
import { theme } from "../../public/theme";

export function ButtonLight() {
	return (
		<Container>
			<ImageSquare size={24} color={theme.colors.main._100} />
		</Container>
	);
}
