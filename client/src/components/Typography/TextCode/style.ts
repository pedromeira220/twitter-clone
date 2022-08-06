import styled from "styled-components";
import { theme } from "../../../public/theme";

interface textProps {
    textColor: string;
}

export const Text = styled.span<textProps>`
    color: ${(props) => props.textColor};
    font-family: ${theme.fonts.jetBrains};
`;

