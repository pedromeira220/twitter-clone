import React, {
	EventHandler,
	MouseEventHandler,
	useContext,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../../../components/ButtonMain";
import { InputMain } from "../../../components/InputMain";
import { TextBodyBold } from "../../../components/Typography/TextBodyBold";
import { TextCode } from "../../../components/Typography/TextCode";
import { theme } from "../../../public/theme";
import { apiBackendFunctions } from "../../../services/apiBackend";
import { AuthContext } from "../../../utils/contexts/AuthContext";
import { AuthUseCase } from "../AuthUseCase";
import { TextLink } from "../Register/style";
import { Container, MainFrame, Title, Form, Footer } from "./style";

const authUseCase = new AuthUseCase();

export function LogIn() {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");

	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	function throwError(errorMessage: string) {
		alert(errorMessage);
	}

	async function handleLogIn(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault();

		if (!authUseCase.isValidEmail(emailText)) {
			throwError("Invalid email");
		}

		const userToLogIn = {
			email: emailText,
			password: passwordText,
		};

		const response = await apiBackendFunctions.loginUser({
			email: userToLogIn.email,
			password: userToLogIn.password,
		});

		console.log(response);

		if (response.error) {
			throwError(response.msg);
			return;
		}

		authContext?.logIn();
		navigate("/");
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
						<Title>Log In</Title>
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
						text="Log In"
					/>
				</Form>

				<Footer>
					<TextCode>Dont have an account?</TextCode>
					<div
						style={{
							color: theme.colors.theme.light,
						}}
					>
						<TextBodyBold>
							<TextLink
								style={{
									fontSize: 24,
								}}
								onClick={() => {
									navigate("/register");
								}}
							>
								Create one
							</TextLink>
						</TextBodyBold>
					</div>
				</Footer>
			</MainFrame>
		</Container>
	);
}
