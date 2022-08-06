import React from "react";
import { Text } from "./style";

type TitleBoldProps = {
    text: string;
}

export function TitleBold({text}: TitleBoldProps){

    return (
        <>
            <Text>{text}</Text>
        </>
    )
}