import React from "react";

import { Container, Navigation, SideBarMenuItem } from "./style";

import Logo from "../../assets/twitterLogo.svg";
import { ButtonMain } from "../ButtonMain";

export function LeftSideBar() {
	return (
		<Container>
			<Navigation>
				<SideBarMenuItem>
					<img src={Logo} alt="Logo" />
				</SideBarMenuItem>
				<ButtonMain text="Deploy" />
			</Navigation>
		</Container>
	);
}
