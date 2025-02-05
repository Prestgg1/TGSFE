export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Navigating from ${from.path} to ${to.path}`);
  console.log('Route meta:', to.meta);
  console.log('Query parameters:', to.query);
  const token = useCookie('token');

  if (!token.value) {
    console.log('No token found, redirecting to login...');
    return navigateTo('/login');
  }




  /* 
      const checkLoginStatus = async () => {
          try {
              const response = await $fetch(`https://tgsapideploy-jjeo.shuttle.app/api/get/users/token/${token.value}`);
              if (!response.isLoggedIn) {
                  console.log('Token is invalid or user is not logged in, redirecting to login...');
                  return navigateTo('/login');
              }
          } catch (error) {
              console.error('Error checking login status:', error);
              return navigateTo('/login');
          }
      };
  
      checkLoginStatus();
       */

  return;
}); 
