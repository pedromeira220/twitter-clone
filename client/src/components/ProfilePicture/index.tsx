import React from "react";
import { Container } from "./style";

type profilePictureProps = {
	source: string;
	altText: string;
};

export function ProfilePicture({ altText, source }: profilePictureProps) {
	return (
		<Container>
			<img
				src={source}
				alt={altText}
				style={{
					width: "100%",
					height: "100%",
				}}
			/>
		</Container>
	);
}
