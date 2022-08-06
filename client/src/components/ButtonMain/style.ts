import styled from "styled-components";
import { theme } from "../../public/theme";

type containerProps = {
    width?: string;
}

export const Container = styled.button<containerProps>`
    border: none;
    background-color: ${theme.colors.main._100};
    width: ${props => props.width ? props.width : "100%"};
    height: 48px;
    border-radius: 99999px;

    &:hover {
        background-color: ${theme.colors.main._85};
        transition: all 0.3s;
        cursor: pointer;
    }
`;

export const Title = styled.span`
    color: ${theme.colors.theme.light}

`;