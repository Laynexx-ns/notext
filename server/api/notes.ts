import prisma from "~/lib/prisma";

export default defineEventHandler(async (event)=>{
   try{
       return await prisma.note.findMany()
   } catch(error){
       console.log(error);
   }
})
