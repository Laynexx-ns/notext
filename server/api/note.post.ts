import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body.userId) {
        throw createError({ statusCode: 400, statusMessage: "User ID is required" });
    }

    const Note = await prisma.note.create({
        data: {
            title: body.title,
            text: body.text,
            userId: body.userId,
        }
    });

    return { success: true, note: Note };
});
