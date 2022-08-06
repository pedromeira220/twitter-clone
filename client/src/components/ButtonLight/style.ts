import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.button`
    border: none;
    background-color: transparent;
    border-radius: 19px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover { 
        background-color: ${theme.colors.main.light};
        cursor: pointer;

    }
`;