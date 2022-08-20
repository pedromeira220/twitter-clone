import React from "react";
import { Container } from "./style";
import ReactLoading from "react-loading";
import { theme } from "../../public/theme";

export function Loading(props: ReactLoading) {
	return (
		<>
			<Container>
				<ReactLoading
					type={"spin"}
					color={theme.colors.main._100}
					height={24}
					width={24}
				/>
			</Container>
		</>
	);
}
