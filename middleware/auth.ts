

export default defineNuxtRouteMiddleware(async (event) =>{
    if (process.client) return

    const { $verifyJwtToken } = useNuxtApp(); //init plugin
    const jwt = useCookie('notextJWT');
    console.log('Jwt', jwt);

    if (!jwt.value){
        return navigateTo('/register');
    }



    try {
        await $verifyJwtToken(jwt.value, process.env.JWT_SECRET);
    } catch(err){
        console.log(err)
        return navigateTo('/register');
    }

})