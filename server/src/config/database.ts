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
	console.log("Base de Dados conectado com sucesso!");
});

export function databaseQuery(text: string, params?: Array<unknown>) {
	return pool.query(text, params);
}
