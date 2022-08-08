import styled from "styled-components";
import { theme } from "../../../public/theme";

interface textProps {
    textColor: string;
    fontSize: string;
}

export const Text = styled.span<textProps>`
    color: ${(props) => props.textColor};
    font-family: ${theme.fonts.jetBrains};
    font-size: ${(props) => props.fontSize};
`;

