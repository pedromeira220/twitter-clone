import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${theme.colors.theme.darkGray}
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 28px;
`;