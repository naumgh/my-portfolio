import { defineConfig } from 'drizzle-kit';
const DATABASE_URL = process.env.DATABASE_URL || "file:./drizzle.sqlite";

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite'
});
