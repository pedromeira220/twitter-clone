import styled from 'styled-components'
import { theme } from '../../public/theme';

export const Container = styled.button`
    border: none;
    background-color: ${theme.colors.main};
    width: 255px;
    height: 48px;
    border-radius: 99999px;
`;

export const Title = styled.span`
    color: ${theme.colors.themeLight}

`;