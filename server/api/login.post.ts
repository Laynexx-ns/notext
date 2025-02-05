// /api/user POST
import prisma from "~/lib/prisma";
import bcrypt from 'bcryptjs';
import validator from 'validator';
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event)=>{
    try{
        const body = await readBody(event);
        if(!validator.isEmail(body.email)){
            throw createError({
                statusCode: 400,
                message: 'invalid email'
            })
        }
        if(!validator.isStrongPassword(body.password, {
            minLength: 8,
            minLowercase: 0,
            minUppercase: 0,
            minNumbers: 0,
            minSymbols: 0,
        })){
            throw createError({
                statusCode: 400,
                message: 'password is too short'
            })
        }
        const user = await prisma.user.findUnique({
            where:{
                email: body.email,
            },
        })

        const isValid = await bcrypt.compare(body.password, user.password);
        console.log("IS valid: ", isValid)
        if (!isValid){
            throw createError({
                statusCode: 400,
                message: 'Email or password us invalid.'
            })
        }

        const token = jwt.sign({id: user.id} , process.env.JWT_SECRET)
        setCookie(event, 'notextJWT', token)

        return { data: 'ok', username: user.username };

    } catch(err){

        console.error(err.code)
        throw err
    }


})
