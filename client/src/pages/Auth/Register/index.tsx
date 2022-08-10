import React, { EventHandler, MouseEventHandler, useState } from "react";
import { ButtonMain } from "../../../components/ButtonMain";
import { InputMain } from "../../../components/InputMain";
import { TextBodyBold } from "../../../components/Typography/TextBodyBold";
import { TextCode } from "../../../components/Typography/TextCode";
import { theme } from "../../../public/theme";
import { AuthUseCase } from "../authUseCase";
import { Container, MainFrame, Title, Form, Footer } from "./style";

const authUseCase = new AuthUseCase();

export function Register() {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");

	function throwError(errorMessage: string) {
		alert(errorMessage);
	}

	function handleLogIn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		event.preventDefault();

		if (!authUseCase.isValidEmail(emailText)) {
			throwError("Invalid email");
		}

		console.log(emailText, passwordText);
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
					<TextCode>Already have an account?</TextCode>
					<div
						style={{
							color: theme.colors.theme.light,
						}}
					>
						<TextBodyBold>
							<span
								style={{
									fontSize: 24,
								}}
							>
								Log in
							</span>
						</TextBodyBold>
					</div>
				</Footer>
			</MainFrame>
		</Container>
	);
}
