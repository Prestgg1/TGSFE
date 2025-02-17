export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`Navigating from ${from.path} to ${to.path}`);
    console.log('Route meta:', to.meta);
    console.log('Query parameters:', to.query);
    
    if (process.client) {
        console.log('Client-side navigation');
        console.log('Window size:', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    
    return;
}); 