import { UserFetcher } from "@/utils/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("token");
    const user = useState<any>("user", () => null);

    if (!token.value) {
        return abortNavigation({
            statusCode: 403,
            message: 'You have no access to this page!'
        });
    }
    try {
        const response: any = await UserFetcher(
            "https://tgsapideploy-jjeo.shuttle.app/api/get/users/token"
        );

        user.value = response[0];
        if (user.value?.duty !== "admin") {
            return abortNavigation({
                statusCode: 403,
                message: 'You have no access to this page!'
            });
        }
    } catch (error) {
        return navigateTo("/login");
    }
});