import React, { useEffect, useState } from "react";
import { userProps } from "../../@types/types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LeftSideBar } from "../../components/LeftSideBar";
import { Timeline } from "../../components/Timeline";
import { UserContext } from "../../utils/contexts/userContext";

import { apiBackendFunctions } from "../../services/apiBackend";

import { Container, MainFrame } from "./style";
import { LoadingPage } from "../LoadingPage";

export function Home() {
	const deafultImage =
		"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEhIQDxAQDxITEA8QEA8SDxAPEg8QFREWFhUSExMYKCggGBolGxMVITEjJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANQA7QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADkQAAIBAQMICAUEAgMBAAAAAAABAgMEBRESFiExQVFTkgYTFCIyYXGBUpGhwdFCQ7HhYvAzcqIj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9pAAAAAAAAAAAAAADjtd5U7J4pYv4VpYHYDOWjpFKX/HBR83pZw1L2rVP3GvTBAbEGIduqv8AcnzM+o3hVhqqT+eIG1BlKN+1aetqfqvwWdlv+FTRNOD360BcA+adRVVjFprenifQAAAAAAAAAAAAgEAAAAAAAAAAAA869aNBOUngltForxs8XKTwS/3AyN5XhK3SxeiK8Mdi/sDqvG+5V8Y0+5Hf+p/gqW8QCKAAAAAAAA97La52R4wk1vWx+qNLdl7Rtndfdnu2P0MmE8nStD3gb4FPct69o/8AnUffWp/F/ZcFQAAAAAAAACAQAAAAAAAAAArL+tfZqeC8U9C8ltYFNfdv7XLJi+5F4Lze8rQCKAAAAAAAAAAAAAJjJwaa0NaUzX3Tbu2wxfiWiS895jztui19kqJ/pfdl6PaBsQAVAAAAAACAQAAAAAAAAAyd/wBo66q1sisleu01cnkrHdpMJWn1knLe2/qB8gAigAAAAAAAAAAAAAAANjdFftFKLetLJfqjtKLovUxU47mn8y9KgAAAAABAIAAAAAAAADxtjwhP/rL+DDm4tayoTX+Mv4MOAABFAAAAAAAAAAAAAAAAXXRd9+a/w+5pDN9F44zm/wDD7mkKgAAAAABAIAAAAAAAACGsdBha8OqlKO5tfU3ZlOkFn6mq3smsr32gVgAIoAAAAAAAAAAAAAAADRdF6eEZy3tL5F4cd00OzUox24Yv1ek7CoAAAAAAQCAAAAAAAAAFdflk7VTbXij3l570WIAwILS/bv7NLLiu5J8r3FWRQAAAAAAAAAAAAAO+5rJ2qosfDHvS+yOKnB1Gkli3oSNhddiVihk/qemT8wOwAFQAAAAAAgEAAAAAAAAAAOS23hCxLvPTsitbA6K1JV4uMlinrRkrzu2Vhe+D1S+zLew36q8nGayE/C/sy2qU1VTUkmnrQGEBdXjcbp4ypd5fDtXpvKaScdDWD3EVAAAAAAAABMIubSSxb0JI6LHYZ2x4QWjbJ6Evc0123XCxafFPbJ7PQDxua6+yLLnpm1q+FfktTmt1sjYo5Un6R2tldYr/AI1HhUWRp0SWle5UXQIjJTWKeKepokAAAAAABAIAAAAAABvAiUlFYt4Ja2Zm973dpxhTbUNr2y/oDqvS+8jGFHS9s9i9DPzm5vFttvW2QCKFpdl8ysuEZ96H1j6FWANxZrVC1LGEk/5Xqj4tVhp2vxxTe9aH8zG0qsqLxi3F708C2svSCcNFSKn5rQyo9bR0d4c/aX5Rw1LlrQ/RlejTL2hfNGr+rJe6Sw+p2wtEKnhnF+kkBj3dtZfty+R9RuqtL9uXvgjY5S3r5kOaWtpe6AzNG4Ks/E4x98X9CzstxU6OmWM356F8jrq3hSpa6kfZ4/wV9o6Qwh4IuT3vQgLiKUFgkkl7JFZeN9Qs+MYYTl/5X5KK2XpUtehywXwrQjjA9LRaJWmTlN4v/dR5gEV2XfeU7E9GmO2L1e241NitsLasYP1jtRij1s1olZpKUHg19fJhG5Bw3ZeMbdHdJeKP3XkdxQAAAIBAAAAAKXpBePVLqoPS13nuW4Divu9O0N04PuLW/if4KgAigAAAAAAAAAA+usa2v5kOTetsgAAAAAAAAAAAB6UK0rPJSi8GjX3bblbo4rQ1olHczGHRYLW7HNSWrVJb0BtgedCqq8VKLxTWKPQqAQCAAADnt9qVjg5vZqW97DF1ajqtyk8W3i2WnSK19dPIWqGvzltKkigAAAAAAAAAAAAAAAAAAAAAAAAAAAAC66O27q5dVJ6JeHyluNIYKMslprWnijaXdae104z26n5Nayo6QgEAPG2V+zQlPctHrsPYo+k9fJjGC2vKfogM9OTm23rbxZABFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuujVpyJOm9UlivVFKetlrdROMlsaYG5CIi8pJrasSUVAyfSCr1lZr4UomsKG03DKvOUusj3pN+FgZ8F5m5LiR5WM3JcSPKyKowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAowXmbkuJHlYzclxI8rAtbnq9dRg9yyX7aDtRxXVY3YYODkpacU0sDtRUSQSAIBIAgEgCASAIBIAgEgCASAIBIAgEgCASAIBIAgEgCASAIBIAgkAD/9k=";

	const [user, setUser] = useState<userProps>({
		identifier: "404",
		name: "USER NOT FOUND",
		profile_picture: deafultImage,
		email: "teste@teste.com",
	});
	const [isGettingUserData, setIsGettingUserData] = useState(true);

	async function loadData() {
		setIsGettingUserData(true);
		const user_id = localStorage.getItem("user_id") || "";

		const response = await apiBackendFunctions.getUserData({ user_id });

		setUser(response);
		setIsGettingUserData(false);
	}

	useEffect(() => {
		loadData();
	}, []);

	return (
		<>
			{isGettingUserData ? (
				<>
					<LoadingPage />
				</>
			) : (
				<>
					<UserContext.Provider value={user}>
						<Container>
							<MainFrame>
								<Timeline />
							</MainFrame>
						</Container>
					</UserContext.Provider>
				</>
			)}
		</>
	);
}
