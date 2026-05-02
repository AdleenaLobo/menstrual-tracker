'use server'
import { getDb } from "../index";
import { users } from "../schema";
import { eq } from "drizzle-orm";


const db = getDb();
export async function FindUserByEmail({email}:{
    email: string;
}){
    const userData = await db.select().from(users).where(eq(users.email , email));
    console.log(userData); 
    return userData;

}