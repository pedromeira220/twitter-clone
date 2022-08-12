import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 18px;
    font-size: 20px;
    color: ${theme.colors.theme.light};
    background-color: transparent;
    border: 2px solid ${theme.colors.theme.darkGray};
    outline: none;
    padding: 13px;
    font-family: ${theme.fonts.jetBrains}
`;