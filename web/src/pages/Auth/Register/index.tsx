import React, { EventHandler, MouseEventHandler, useState } from "react";
import { ButtonMain } from "../../../components/ButtonMain";
import { InputMain } from "../../../components/InputMain";
import { TextBodyBold } from "../../../components/Typography/TextBodyBold";
import { TextCode } from "../../../components/Typography/TextCode";
import { theme } from "../../../public/theme";
import { apiBackendFunctions } from "../../../services/apiBackend";
import { AuthUseCase } from "../AuthUseCase";
import { Container, MainFrame, Title, Form, Footer } from "./style";

const authUseCase = new AuthUseCase();

export function Register() {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [nameText, setNameText] = useState("");
	const [identifierText, setIdentifierText] = useState("");
	const [profilePictureURL, setProfilePictureURL] = useState("");

	interface IUserToCreate {
		email: string;
		name: string;
		identifier: string;
		password: string;
		profile_picture: string;
	}

	function throwError(errorMessage: string) {
		alert(errorMessage);
	}

	async function handleLogIn(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault();

		if (!authUseCase.isValidEmail(emailText)) {
			throwError("Invalid email format");
		}

		const userToCreate: IUserToCreate = {
			email: emailText,
			name: nameText,
			password: passwordText,
			identifier: identifierText,
			profile_picture: profilePictureURL,
		};

		let response = await apiBackendFunctions.registerUser({
			email: userToCreate.email,
			identifier: userToCreate.identifier,
			name: userToCreate.name,
			password: userToCreate.password,
			profile_picture: userToCreate.profile_picture,
		});

		if (response.error) {
			throwError(response.msg);
		}

		response = await apiBackendFunctions.loginUser({
			email: userToCreate.email,
			password: userToCreate.password,
		});

		if (response.error) {
			throwError(response.msg);
		}

		console.log(response.data);
	}

	function handleProfilePictureChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		const URL = event?.target.value;

		setProfilePictureURL(URL);
	}

	function handleEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const text = event?.target.value;

		setEmailText(text);
	}

	function handlePasswordInputChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		const text = event?.target.value;
		setPasswordText(text);
	}

	function handleNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const text = event?.target.value;
		setNameText(text);
	}

	function handleIdentifierInputChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		const text = event?.target.value;
		setIdentifierText(text);
	}
	return (
		<Container>
			<MainFrame>
				<header>
					<TextBodyBold>
						<Title>Register</Title>
					</TextBodyBold>
				</header>

				<Form>
					<InputMain
						onChange={(event) => {
							handleEmailInputChange(event);
						}}
						type={"email"}
						placeholder="E-mail"
					/>
					<InputMain
						onChange={(event) => {
							handlePasswordInputChange(event);
						}}
						type={"password"}
						placeholder="Password"
					/>
					<InputMain
						onChange={(event) => {
							handleNameInputChange(event);
						}}
						type={"text"}
						placeholder="Your name"
					/>
					<InputMain
						onChange={(event) => {
							handleIdentifierInputChange(event);
						}}
						type={"text"}
						placeholder="Your identifier"
					/>
					<InputMain
						onChange={(event) => {
							handleProfilePictureChange(event);
						}}
						type={"text"}
						placeholder="Type a profile picture URL"
					/>
					<ButtonMain
						type="submit"
						onClick={handleLogIn}
						style={{
							borderRadius: 18,
						}}
						text="Register"
					/>
				</Form>

				<Footer>
					<span style={{ textAlign: "center" }}>
						<TextCode>Already have an account?</TextCode>
					</span>

					<div
						style={{
							color: theme.colors.theme.light,
						}}
					>
						<TextBodyBold>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<span
									style={{
										fontSize: 24,
										textAlign: "center",
									}}
								>
									Log in
								</span>
							</div>
						</TextBodyBold>
					</div>
				</Footer>
			</MainFrame>
		</Container>
	);
}
