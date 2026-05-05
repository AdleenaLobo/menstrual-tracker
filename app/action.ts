import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}
console.log(process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);

// this is your main DB object
export const db = drizzle(sql);