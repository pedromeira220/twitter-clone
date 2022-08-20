import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home";
import { LogIn } from "./pages/Auth/LogIn";
import { Register } from "./pages/Auth/Register";
import "./public/global.css";
import { AuthContext } from "./utils/contexts/AuthContext";
import { LoadingPage } from "./pages/LoadingPage";

function App() {
	const [userToken, setUserToken] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const authContext = useMemo(function () {
		return {
			logIn: async function () {
				setUserToken(await this.getUserToken());
			},
			register: async function () {
				setUserToken(await this.getUserToken());
			},
			logOut: function () {
				setUserToken(null);
				localStorage.setItem("token", "");
			},
			getUserToken: async function () {
				const userToken = localStorage.getItem("token");

				return userToken;
			},
		};
	}, []);

	async function loadData() {
		const token = await authContext.getUserToken();
		setUserToken(token);
		setIsLoading(false);
	}

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		loadData();
	}, [userToken, localStorage.getItem("token")]);

	return (
		<AuthContext.Provider value={authContext}>
			<Routes>
				{isLoading ? (
					<>
						<Route path="/" element={<LoadingPage />} />
					</>
				) : (
					<>
						{!userToken ? (
							<>
								<Route path="/login" element={<LogIn />} />
								<Route path="/register" element={<Register />} />
								<Route path="/" element={<LogIn />} />
							</>
						) : (
							<>
								<Route path="/" element={<Home />} />
							</>
						)}
					</>
				)}
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
