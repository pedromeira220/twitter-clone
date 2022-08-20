import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	height: 80vh;
`;

export const MainFrame = styled.div`
	max-width: 500px;
	margin: 0 auto;
`;

export const Title = styled.div`
	color: white;
	font-size: 48px;
	text-align: center;
	width: 100%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 36px;
	margin-top: 128px;
`;

export const Footer = styled.footer`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	margin-top: 46px;
`;

export const TextLink = styled.span`
	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;
