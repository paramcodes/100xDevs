import {Hono} from "hono";
import {PrismaClient} from "@prisma/client/edge";
import {withAccelerate} from "@prisma/extension-accelerate";
import {decode,sign,verify} from 'hono/jwt';
import app from "../index";

export const userRoute = new Hono<{Bindings:{DATABASE_URL:string}}>();

userRoute.post('/signup',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const user = await prisma.user.create({
        data:{
            email:body.email,
            password:body.password
        }
    })
    const payload = {
        id:user.id
    }
    const secret = "mysecretkey";
    const token = await sign(payload,secret);

    return c.json({
        jwt:token
    });
})

userRoute.post('/signin',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    })

    if(!user){
        c.status(403);
        return c.json({error:"user not found"});
    }

    const token = await sign({id:user.id},"mysecretkey");
    return c.json({jwt:token})
})