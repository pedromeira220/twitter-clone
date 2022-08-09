import styled from "styled-components";
import { theme } from "../../public/theme";

export const Container = styled.div`

`;

export const Main = styled.div`

`;

export const ActionButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;

`;

export const UserInfo = styled.div`
    display: flex;
    margin-bottom: 17px;

`;

export const TweetText = styled.div`
    text-align: justify;
`;

export const Username = styled.span`
    color: ${theme.colors.theme.light};
    margin-right: 4px;
`;

export const UserIdentifier = styled.span`
    color: ${theme.colors.theme.middleGray}
`;

export const PostTime = styled.span`
    color: ${theme.colors.theme.middleGray}
`;

export const Dot = styled.span`
    display: inline-block;  
    border-radius: 4px;
    width: 4px;
    height: 4px;
    background-color: ${theme.colors.theme.middleGray}
`;

