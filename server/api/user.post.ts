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
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(body.password, salt);

        const user = await prisma.user.create({
            data:{
                email: body.email,
                password: passwordHash,
                username: body.username,
                salt: salt
            },
        })

        const token = jwt.sign({id: user.id} , process.env.JWT_SECRET)
        setCookie(event, 'notextJWT', token)

        return {data: 'ok'};

    } catch(err){
        if (err.code === 'P2002') {
            throw createError({
                statusCode: 409,
                message: 'User already exists',
            })
        }

        console.error(err.code)
        throw err
    }


})