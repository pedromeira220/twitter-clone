import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`
	width: 800px;

	border-left: 1px solid ${theme.colors.theme.darkGray};
	border-right: 1px solid ${theme.colors.theme.darkGray};
`;

export const TopBar = styled.div`
	padding: 13px 17px;

	border-bottom: 1px solid ${theme.colors.theme.darkGray};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LoadingContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ExitButton = styled.button`
	background-color: ${theme.colors.theme.darkGray};
	border: none;
	border-radius: 8px;
	color: white;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	font-family: ${theme.fonts.jetBrains};

	&:hover {
		cursor: pointer;
		background-color: ${theme.colors.theme.middleGray};
		transition: 0.2s;
	}
`;
