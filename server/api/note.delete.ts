import prisma from "~/lib/prisma";

export default defineEventHandler( async (event)=>{
    const body = await readBody(event);
    try{
        const resp = await prisma.note.delete({
            where:{
                id: body.noteId
            }
        })
        return{data: resp}
    }catch (e){
        console.log(e);
    }

})