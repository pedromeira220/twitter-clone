import styled from "styled-components";
import { theme } from "../../public/theme";

type containerProps = {
    hoverColor: string;
}

export const Container = styled.button<containerProps>`
    border: none;
    background-color: transparent;
    border-radius: 19px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover { 
        background-color: ${(props) => props.hoverColor};
        cursor: pointer;

    }
`;