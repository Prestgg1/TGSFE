export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token');


  const checkLoginStatus = async () => {
    try {
      const response = await $fetch(`https://tgsapideploy-jjeo.shuttle.app/api/get/users/token/${token.value}`);
      console.log(response)
      /* if (!response.isLoggedIn) {
        console.log('Token is invalid or user is not logged in, redirecting to login...');
        return navigateTo('/login');
      } */
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  checkLoginStatus();


  return;
}); 
