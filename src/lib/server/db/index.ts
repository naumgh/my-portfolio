import { drizzle } from "drizzle-orm/better-sqlite3";
//@ts-ignore
import Database from "better-sqlite3";
import fs from "fs";

// If running on Vercel, copy the SQLite DB to `/tmp/` (writable directory)
const dbPath = process.env.VERCEL ? "/tmp/drizzle.sqlite" : "drizzle.sqlite";

if (process.env.VERCEL) {
  if (!fs.existsSync(dbPath)) {
    console.log("Copying SQLite database to /tmp/");
    fs.copyFileSync("drizzle.sqlite", dbPath);
  }
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite);
