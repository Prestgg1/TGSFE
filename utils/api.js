const { apiBase } = useRuntimeConfig().public;
export const API_URLS = {
    BASE_URL: apiBase,
    AUTH: {
        LOGIN: '/user/login',
        REGISTER: '/user/create'
    },
    NEWS: "/api/get/news"
} 