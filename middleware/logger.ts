import { UserFetcher } from "@/utils/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie("token");
    const user = useState<any>("user", () => null);

    if (!token.value || !user.value) {
        try {
            const response: any = await UserFetcher(
                "https://tgsapideploy-jjeo.shuttle.app/api/get/users/token"
            );
            user.value = response[0];
        } catch (error) {
            token.value = null;
            user.value = null;
            console.log(error);
        }
    }
});
