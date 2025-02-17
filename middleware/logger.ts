// middleware/logger.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Token kontrolü
  const token = useCookie<string | undefined>("token");

  const user: any = useState("user", () => null);
  if (user.value) {
    return;
  }

  try {
    const response = await $fetch<{ name: string }[]>(
      `https://tgsapideploy-jjeo.shuttle.app/api/get/users/token/${token.value}`,
    );

    if (response[0].name !== "") {
      user.value = response[0];
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    token.value = undefined;
    return navigateTo("/login");
  }
});
