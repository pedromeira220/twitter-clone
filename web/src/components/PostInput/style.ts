import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`

    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${theme.colors.theme.darkGray}
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;

`;


export const Input = styled.textarea`
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
    color: ${theme.colors.theme.light};
    font-size: 20px;
    font-family: ${theme.fonts.jetBrains};
    resize: none;
    scrollbar-width: 0px;

    &::-webkit-scrollbar {
        display: none;
    }

`;

type textColoredProps = {
    color: string
}

export const TextColored = styled.span<textColoredProps>`
    color: ${props => props.color}
`;