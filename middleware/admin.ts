export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token')

    if (!token.value) {
        return navigateTo('/login')
    }
    const { data }: any = await useFetch('https://tgsapideploy-jjeo.shuttle.app/api/get/users/token/' + token.value)

    if (data.value[0].duty != "admin") {
        return navigateTo('/403')
    }
})