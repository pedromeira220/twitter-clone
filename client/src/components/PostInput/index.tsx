import React from "react";
import { theme } from "../../public/theme";
import { ButtonLight } from "../ButtonLight";
import { ButtonMain } from "../ButtonMain";
import { Line } from "../Line";
import { ProfilePicture } from "../ProfilePicture";
import { TextCode } from "../Typography/TextCode";

import { Container, InputContainer } from "./style";

export function PostInput() {
	return (
		<Container>
			<div>
				<ProfilePicture
					altText="Profile picture of user"
					source="https://github.com/petergamer8k.png"
				/>
			</div>
			<div style={{ marginLeft: "1rem", width: "100%" }}>
				<InputContainer>
					<TextCode textColor={theme.colors.theme.middleGray}>
						{"//What is happing?"}
					</TextCode>
				</InputContainer>

				<Line width="100%" height="1px" color={theme.colors.theme.darkGray} />
				<div
					style={{
						marginTop: 10,
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<ButtonLight />
					<ButtonMain text="Deploy" width="74px" />
				</div>
			</div>
		</Container>
	);
}
