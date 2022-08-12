import React, { EventHandler, MouseEventHandler, useState } from "react";
import { ButtonMain } from "../../../components/ButtonMain";
import { InputMain } from "../../../components/InputMain";
import { TextBodyBold } from "../../../components/Typography/TextBodyBold";
import { TextCode } from "../../../components/Typography/TextCode";
import { theme } from "../../../public/theme";
import { AuthUseCase } from "../AuthUseCase";
import { Container, MainFrame, Title, Form, Footer } from "./style";

const authUseCase = new AuthUseCase();

export function Register() {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
	const [nameText, setNameText] = useState("");

	function throwError(errorMessage: string) {
		alert(errorMessage);
	}

	function handleLogIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		event.preventDefault();

		if (!authUseCase.isValidEmail(emailText)) {
			throwError("Invalid email format");
		}

		console.log(emailText, passwordText, nameText);
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