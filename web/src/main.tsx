import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContext } from "./utils/contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserContext.Provider
			value={{
				identifier: "pedromeira",
				name: "Pedro Meira",
				profilePicture: "https://github.com/petergamer8k.png",
				email: "pedro@email.com",
			}}
		>
			<App />
		</UserContext.Provider>
	</React.StrictMode>
);
