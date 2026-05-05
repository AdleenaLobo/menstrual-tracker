
import {db} from "../action";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";

export async function FindUserByEmail({email}:{
    email: string;
}){
    const userData = await db.select().from(users).where(eq(users.email , email));
    console.log(userData);
    return userData;

}