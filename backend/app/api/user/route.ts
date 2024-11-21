import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";


export function GET(){
    return Response.json({
        email : "omsharma.83173@gmail.com",
        name : "Om Sharma"
    })
}

export async function POST(req:NextRequest){
    const prisma = new PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
    const data = await req.json();
    //const {username,password} = data;

    console.log(data.username)
    console.log(data.password);    
    const User = await prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })

    console.log(User.id);
    return Response.json({
        "message":"Account Signup Successfull!"
    })
}