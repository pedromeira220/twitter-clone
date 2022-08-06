import React from "react";
import { ButtonMain } from "../../components/ButtonMain";
import { LeftSideBar } from "../../components/LeftSideBar";


import {Container, MainFrame, Navigation, SideBarMenuItem} from "./style";

export function Home(){

    return (
        <Container>
            <MainFrame>
                <LeftSideBar />
            </MainFrame>
        </Container>
    )
}