import Database from "better-sqlite3";

const path = process.env.DB_DATABASE || "database.sqlite";

const db = new Database(path);

export default db;
