import {Hono} from "hono";
import app from "../index";
import {verify,decode} from "hono/jwt";
import {withAccelerate} from "@prisma/extension-accelerate";
import {PrismaClient} from "@prisma/client/edge";
import {signupInput} from "../zod";


export const blogRoute = new Hono<{Bindings:{DATABASE_URL:string},Variables:{userId:string}}>();

blogRoute.use('/*',async(c,next)=> {
    const header = c.req.header("authorization") || '';
    const token = header.split(' ')[1];
    const response = await verify(token,"mysecretkey");
    if(response) {
        // c.set('userId',response.id);
        await next();
    }
    else {
        c.status(403);
        return c.json({error:"unauthorized"});
    }
});

blogRoute.post('/',async (c)=>{
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs not correct"
        })
    }
    // const userId = c.user;
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:""
        }
    })
    return c.json({
        id:blog.id
    });
})

blogRoute.put('/',async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })
    return c.json({
        id:blog.id
    });
})

blogRoute.get(':id',async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.findUnique({
        where:{
            id:c.req.param('id')
        }
    })
    return c.json({
        blog
    });
})

blogRoute.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany();
    return c.json({
        blogs
    })
})