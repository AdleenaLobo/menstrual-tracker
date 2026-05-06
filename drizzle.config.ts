import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from "fs";


// Explicitly load from .env.development.local
dotenv.config({ path: '.env' });

// Debug: Check if file exists and print status
const envPath = path.resolve(process.cwd(), '.env');
console.log(`Checking for env file at: ${envPath}`);
console.log(`File exists: ${fs.existsSync(envPath)}`);

// Debug: Log DATABASE_URL status (not the actual value for security)
console.log(`DATABASE_URL is ${process.env.DATABASE_URL ? 'set' : 'NOT SET'}`);

// Ensure the DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set!');
  console.error('Please check your .env.development.local file');
  process.exit(1);
}

export default {
  schema: './app/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;