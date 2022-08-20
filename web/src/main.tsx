import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContext } from "./utils/contexts/userContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContext.Provider
				value={{
					identifier: "pedromeira",
					name: "Pedro Meira",
					profile_picture: "https://github.com/petergamer8k.png",
					email: "pedro@email.com",
				}}
			>
				<App />
			</UserContext.Provider>
		</BrowserRouter>
	</React.StrictMode>
);
