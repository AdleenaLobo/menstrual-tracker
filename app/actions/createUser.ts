'use server'

import bcrypt from "bcryptjs";
import {getDb} from "../index";
import {users} from "../schema";

const db = getDb();
export async function CreateUser({username , email , password}:{
    username: string ;
    email : string;
    password: string;
}):Promise<void>{
    const hashedPass = await bcrypt.hash(password , 10);
    await db.insert(users).values({name:username , email , password: hashedPass});
}