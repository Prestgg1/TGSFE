export function UserFetcher(url: string) {
    const token = useCookie('token');
    console.log(token.value)
    const request = $fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`
        }
    })
    return request
}
export const baseURL = "https://tgsapideploy-jjeo.shuttle.app/api"