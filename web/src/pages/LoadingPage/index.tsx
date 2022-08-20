import React from "react";

import { Container } from "./style";
import ReactLoading from "react-loading";
import { theme } from "../../public/theme";

export function LoadingPage() {
	return (
		<Container>
			<ReactLoading
				type={"spin"}
				color={theme.colors.main._100}
				height={64}
				width={64}
			/>
		</Container>
	);
}
