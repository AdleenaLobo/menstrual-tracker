// test-env.ts
import * as dotenv from 'dotenv';

// Load from specific file
dotenv.config({ path: '.env.development.local' });
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
// Don't log the full URL for security reasons
if (process.env.DATABASE_URL) {
  console.log('DATABASE_URL starts with:', process.env.DATABASE_URL.substring(0, 12) + '...');
}