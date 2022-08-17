/* eslint-disable react/no-unescaped-entities */
import { ImageSquare } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { tweetProps, userProps } from "../../@types/types";
import { theme } from "../../public/theme";
import { apiBackendFunctions } from "../../services/apiBackend";
import { ButtonLight } from "../ButtonLight";
import { ButtonMain } from "../ButtonMain";
import { Line } from "../Line";
import { ProfilePicture } from "../ProfilePicture";

import { TextCode } from "../Typography/TextCode";

import { Container, InputContainer, Input, TextColored } from "./style";

type postInputProps = {
	user: userProps;
	tweets: tweetProps[];
	setTweetsList: React.Dispatch<React.SetStateAction<tweetProps[]>>;
};

export function PostInput({
	user,
	tweets: tweetsList,
	setTweetsList,
}: postInputProps) {
	const [isPostInputOpen, setIsPostInputOpen] = useState(false);
	const [postInputText, setPostInputText] = useState("");
	const [isButtonMainDisabled, setIsButtonMainDisabled] = useState(true);

	function handlePostInputClick() {
		setIsPostInputOpen(true);
	}

	function handlePostInputChange(text: string) {
		setPostInputText(text);
	}

	useEffect(() => {
		if (postInputText.length > 0) {
			setIsButtonMainDisabled(false);
		} else {
			setIsButtonMainDisabled(true);
		}
	});

	function handleSubmitPostButtonClick() {
		const newTweet: tweetProps = {
			data: {
				content: postInputText,
				creationDate: new Date(),
				numberOfLikes: 0,
				id: new Date().getTime().toString(),
				user,
				user_id: user.id || "",
			},
		};
		const newTweetsList = [newTweet, ...tweetsList];

		setTweetsList(newTweetsList);

		apiBackendFunctions.createPost({
			text_content: postInputText,
			title: user.name,
			username_identifier: user.identifier,
		});
		setPostInputText("");
		apiBackendFunctions.getAllPosts();
	}

	return (
		<Container>
			<div>
				<ProfilePicture
					altText={"Profile picture of user " + user.name}
					source={user.profile_picture}
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
								value={postInputText}
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
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<ButtonMain
						disabled={isButtonMainDisabled}
						onClick={() => {
							handleSubmitPostButtonClick();
						}}
						text="Deploy"
						width="74px"
					/>
				</div>
			</div>
		</Container>
	);
}
