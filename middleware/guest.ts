import { UserFetcher } from "@/utils/api";
import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("token");
    const user = useState<any>("user", () => null);

    if (token.value) {
        try {
            const response: any = await UserFetcher(
                "https://tgsapideploy-jjeo.shuttle.app/api/get/users/token"
            );
            user.value = response[0];

            if (user.value) {
                return navigateTo("/dashboard");
            }
        } catch (error) {
            console.log(error);
            token.value = null;
            user.value = null;
        }
    }
});
