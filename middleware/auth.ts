export default defineNuxtRouteMiddleware(async (event) => {
    const jwtCookie = useCookie('notextJWT');

    if (!jwtCookie.value) {
        return navigateTo('/register');
    }

    try {
        const response = await $fetch('/api/verify-token', {
            method: 'POST',
            body: { token: jwtCookie.value },
        });

        if (!response.success) {
            console.error('Token validation failed:', response.message);
            return navigateTo('/register');
        }

        useCookie('userId').value = response.user.id || 'default-user-id';

        console.log('Token validated successfully!', response.user);
    } catch (err) {
        console.error('Error during token validation:', err);
        return navigateTo('/register');
    }
});
