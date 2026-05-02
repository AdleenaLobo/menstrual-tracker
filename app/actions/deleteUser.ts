'use server';
import { db } from ".."
import { users } from "../schema";
import { eq } from "drizzle-orm";

export default async function DeleteUser({userid}: {userid: string}) {
    await db.delete(users).where(eq(users.id, userid));
}