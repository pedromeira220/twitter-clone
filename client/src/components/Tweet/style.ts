import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`
    width: 100%;
    border-top: 1px solid ${theme.colors.theme.darkGray};
    border-left: 0px;
    border-right: 0px;
    padding: 13px;
`;

export const Body = styled.div`
    display: flex;

`;

export const ProfilePictureContainer = styled.div`
    margin-right: 16px;
`;