import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    if (!body || !body.token) {
        return { success: false, message: 'No token provided' };
    }

    try {
        const validated = jwt.verify(body.token, process.env.JWT_SECRET);
        return { success: true, user: validated };
    } catch (error) {
        return { success: false, message: 'Invalid token' };
    }
});
