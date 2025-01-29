import { drizzle } from 'drizzle-orm/better-sqlite3';
import { createClient } from '@libsql/client';
//@ts-ignore
import { env } from '$env/dynamic/private';
//@ts-ignore
import Database from 'better-sqlite3';
//if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
//const client = createClient({ url: env.DATABASE_URL });
//export const db = drizzle(client);

const sqlite = new Database('mydb.sqlite');
export const db = drizzle(sqlite);