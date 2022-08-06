import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.button`
    border: none;
    background-color: ${theme.colors.main._100};
    width: 100%;
    height: 48px;
    border-radius: 99999px;

    &:hover {
        background-color: ${theme.colors.main._85};
        transition: all 0.3s;
    }
`;

export const Title = styled.span`
    color: ${theme.colors.theme.light}

`;