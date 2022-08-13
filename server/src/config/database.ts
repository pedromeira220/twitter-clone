import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// ==> Conexão com a Base de Dados:

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});

pool.on("connect", () => {
	console.log("Database successfully connected!");
});

pool.on("error", (error) => {
	console.log(error);

	throw new Error("Internal server error");
});

export function databaseQuery(text: string, params?: Array<unknown>) {
	return pool.query(text, params);
}
