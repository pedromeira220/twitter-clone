import React, { InputHTMLAttributes } from "react";
import { Container } from "./style";

type inputMainProps = InputHTMLAttributes<HTMLInputElement>;

export function InputMain({ ...rest }: inputMainProps) {
	return <Container {...rest}></Container>;
}
