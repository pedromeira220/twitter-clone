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
    color: ${theme.colors.theme.light};

    &:disabled {
    background-color: ${theme.colors.main.dark};
    cursor: default;

    }
    &:hover {
        background-color: ${theme.colors.main.hover};
        transition: all 0.3s;
        cursor: pointer;
    }
    &:hover:disabled {
        background-color: ${theme.colors.main.dark};

        cursor: default;
    }

    &:active:disabled {
        background-color: ${theme.colors.main.dark};
        opacity: 1;
        cursor: default;
    }

    &:active {
        background-color: ${theme.colors.main.dark};
        opacity: 0.8;
    }
`;

export const Title = styled.span`

`;