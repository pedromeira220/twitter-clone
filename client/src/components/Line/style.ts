import styled from "styled-components";

type containerProps = {
    width: string;
    height: string;
    color: string;
}

export const Container = styled.div<containerProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color};
`;