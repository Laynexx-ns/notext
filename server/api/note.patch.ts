import prisma from "~/lib/prisma";

export default defineEventHandler(async (event)=>{
    const body = await readBody(event);
    const resp = await prisma.note.update({
        where:{
            id: Number(body.noteId),
        },
        data:{
            title: body.title,
            text: body.text,
        },
    })

})