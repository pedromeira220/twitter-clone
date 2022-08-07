import React from "react";
import { LeftSideBar } from "../../components/LeftSideBar";
import { Timeline } from "../../components/Timeline";

import { Container, MainFrame } from "./style";

export function Home() {
	return (
		<Container>
			<MainFrame>
				<Timeline />
			</MainFrame>
		</Container>
	);
}
