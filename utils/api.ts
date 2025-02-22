
export function UserFetcher(url: string) {
    const request = $fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${useCookie('token').value}`
        }
    })
    return request
}
export const baseURL = "https://tgsapideploy-jjeo.shuttle.app/api"