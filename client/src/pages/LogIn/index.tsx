import React from "react";
import { ButtonMain } from "../../components/ButtonMain";
import { InputMain } from "../../components/InputMain";
import { TextBodyBold } from "../../components/Typography/TextBodyBold";
import { TextCode } from "../../components/Typography/TextCode";
import { theme } from "../../public/theme";
import { Container, MainFrame, Title, Form, Footer } from "./style";

export function LogIn() {
	return (
		<Container>
			<MainFrame>
				<header>
					<TextBodyBold>
						<Title>Log In</Title>
					</TextBodyBold>
				</header>

				<Form>
					<InputMain type={"email"} placeholder="E-mail" />
					<InputMain type={"password"} placeholder="Password" />
					<ButtonMain
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
							<span
								style={{
									fontSize: 24,
								}}
							>
								Create one
							</span>
						</TextBodyBold>
					</div>
				</Footer>
			</MainFrame>
		</Container>
	);
}
