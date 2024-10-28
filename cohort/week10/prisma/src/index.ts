import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email:string,password:string,firstname:string,lastname:string) {
    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstname,
            lastname
        }
    });
    console.log(res);
}

insertUser("some@gmail.com","wow","alex","walker");