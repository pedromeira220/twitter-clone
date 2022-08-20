import { createContext, useMemo } from "react";
interface IAuthContext {
	logIn: () => Promise<void>;
	register: () => Promise<void>;
	logOut: () => void;
	getUserToken: () => Promise<string | null>;
}

export const AuthContext = createContext<IAuthContext | null>(null);
