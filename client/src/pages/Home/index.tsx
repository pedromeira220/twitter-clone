import React from "react";
import { ButtonMain } from "../../components/ButtonMain";
import { LeftSideBar } from "../../components/LeftSideBar";
import { Timeline } from "../../components/Timeline";


import {Container, MainFrame, Navigation, SideBarMenuItem} from "./style";

export function Home(){

    return (
        <Container>
            <MainFrame>
                <LeftSideBar />
                <Timeline />
            </MainFrame>
        </Container>
    )
}