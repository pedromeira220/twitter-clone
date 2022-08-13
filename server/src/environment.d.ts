declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PGHOST: string;
			PGUSER: string;
			PGDATABASE: string;
			PGPASSWORD: string;
			PGPORT: number;
		}
	}
}

export {};
