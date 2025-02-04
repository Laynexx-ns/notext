export default defineNuxtRouteMiddleware(async (event) =>{
    if (process.client) return

    const { $verifyJwtToken } = useNuxtApp(); //init plugin
    const jwt = useCookie('notextJWT');
    console.log('Jwt', jwt);

    if (!jwt.value){
        return navigateTo('/register');
    }

    try {
        const validated = await $verifyJwtToken(jwt.value, process.env.JWT_SECRET);
        console.log(validated);
        if (!validated) navigateTo('/register');
    } catch(err){
        console.log(err)
        return navigateTo('/register');
    }

})