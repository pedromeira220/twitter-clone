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
	const [user, setUser] = useState<userProps>();
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
