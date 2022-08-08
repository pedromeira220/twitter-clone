/* eslint-disable react/no-unescaped-entities */
import { ImageSquare } from "phosphor-react";
import React, { useState } from "react";
import { theme } from "../../public/theme";
import { ButtonLight } from "../ButtonLight";
import { ButtonMain } from "../ButtonMain";
import { Line } from "../Line";
import { ProfilePicture } from "../ProfilePicture";
import { TextCode } from "../Typography/TextCode";

import { Container, InputContainer, Input, TextColored } from "./style";

export function PostInput() {
	const [isPostInputOpen, setIsPostInputOpen] = useState(false);
	const [postInputText, setPostInputText] = useState("");

	function handlePostInputClick() {
		setIsPostInputOpen(true);
	}

	function handlePostInputChange(text: string) {
		console.log(text);
		setPostInputText(text);
		console.log(postInputText);
	}
	/*
function handleSubmitPostButtonClick() {

}

*/

	return (
		<Container>
			<div>
				<ProfilePicture
					altText="Profile picture of user"
					source="https://github.com/petergamer8k.png"
				/>
			</div>
			<div style={{ marginLeft: "1rem", width: "100%" }}>
				<InputContainer
					onClick={() => {
						handlePostInputClick();
					}}
				>
					<TextCode textColor={theme.colors.theme.middleGray}>
						{"//What is happing?"}
					</TextCode>

					{isPostInputOpen && (
						<TextCode textColor={theme.colors.theme.middleGray}>
							<TextColored color={theme.colors.main._100}>console</TextColored>
							<span>.</span>
							<TextColored color={"white"}>log</TextColored>
							<TextColored color={theme.colors.theme.light}>(</TextColored>
							<TextColored color={theme.colors.main._100}>"</TextColored>

							<Input
								maxLength={200}
								onChange={(event) => {
									const text = event.target.value;
									handlePostInputChange(text);
								}}
								rows={4}
								autoFocus={true}
							/>

							<TextColored color={theme.colors.main._100}>"</TextColored>
							<TextColored color={theme.colors.theme.light}>)</TextColored>
							<span>;</span>
						</TextCode>
					)}
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
					<ButtonLight hoverColor={theme.colors.main.light}>
						<ImageSquare size={24} color={theme.colors.main._100} />
					</ButtonLight>
					<ButtonMain text="Deploy" width="74px" />
				</div>
			</div>
		</Container>
	);
}
