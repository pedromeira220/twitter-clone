import React from "react";

import { Container } from "./style";

type lineProps = {
	width: string;
	height: string;
	color: string;
};

export function Line({ width, height, color }: lineProps) {
	return <Container width={width} color={color} height={height}></Container>;
}
