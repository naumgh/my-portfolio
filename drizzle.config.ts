import { defineConfig } from 'drizzle-kit';

// Use `/tmp/drizzle.sqlite` in Vercel, otherwise use local file
const DATABASE_URL =
  process.env.DATABASE_URL || "file:./drizzle.sqlite";

export default defineConfig({
  schema: './src/lib/server/db/schema.ts',
  dbCredentials: { url: DATABASE_URL },
  verbose: true,
  strict: true,
  dialect: 'sqlite'
});