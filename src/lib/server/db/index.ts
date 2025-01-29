import { drizzle } from "drizzle-orm/better-sqlite3";
//@ts-ignore
import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Use `/tmp/drizzle.sqlite` on Vercel, otherwise use local file
const localDbPath = path.resolve("drizzle.sqlite");
const vercelDbPath = "/tmp/drizzle.sqlite";
const dbPath = process.env.VERCEL ? vercelDbPath : localDbPath;

if (process.env.VERCEL) {
  // Only copy if the local database exists
  if (fs.existsSync(localDbPath)) {
    console.log("Copying SQLite database to /tmp/");
    fs.copyFileSync(localDbPath, vercelDbPath);
  } else {
    console.warn("⚠️ drizzle.sqlite does not exist. Skipping copy.");
  }
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite);
