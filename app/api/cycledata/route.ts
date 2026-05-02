import { NextResponse } from "next/server";
import { getDb } from "@/app";
import { usercycledata } from "@/app/schema.ts";


const db = getDb();
 export async function POST(req:Request, res){
    try{
        console.log("Inside post");
        const data = await req.json();
        const id = "a8e7ae15-4b0c-494a-9f42-a5f64dac6d14";
        console.log("data", data);
        const res = await  db.insert(usercycledata).values({user: id, cycle: data.cyclestatus, status: data.status , flow: data.flow, symptoms: data.symptoms , comments: data.comments})
        return NextResponse.json({message: res}, {status:200});
    }
    catch(error){
        console.error("You have some error: ", error);
        return  NextResponse.json({error:error}, {status:500});
    }
}