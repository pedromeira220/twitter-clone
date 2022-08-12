import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
`;




export const Text = styled.span`
color: ${theme.colors.theme.middleGray};
    font-family: ${theme.fonts.jetBrains};
    font-size: 13px;

    &:hover {
        color: ${theme.colors.red}
    }
`;