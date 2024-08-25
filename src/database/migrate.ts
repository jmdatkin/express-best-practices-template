import fs from "fs";
import db from "./db";

if (process.argv.length < 3) {
  console.error("Specify a migration command (up|down).");
  process.exit(1);
}

let sql;

switch (process.argv[2]) {
  case "up":
    sql = fs
      .readFileSync("src/database/migrations/00000000_create_tables.up.sql")
      .toString();
    break;
  case "down":
    sql = fs
      .readFileSync("src/database/migrations/00000000_create_tables.down.sql")
      .toString();
    break;
  default:
    console.error(
      "Unrecognized command. Please specify a migration command (up|down)."
    );
    process.exit(1);
}

try {
  db.exec(sql);
  console.log("Migration executed successfully.");
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
