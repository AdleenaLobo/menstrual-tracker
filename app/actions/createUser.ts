

import bcrypt from "bcryptjs";
import {db} from "../action";
import {users} from "../schema";

export const runtime = "nodejs";
export async function CreateUser({username , email , password}:{
    username: string ;
    email : string;
    password: string;
}):Promise<void>{
    const hashedPass = await bcrypt.hash(password , 10);
    console.log(password);
    await db.insert(users).values({name:username , email , password: hashedPass});
}