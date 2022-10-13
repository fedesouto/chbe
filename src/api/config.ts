export const baseUrl:string = 'http://localhost:8080/'
export const setBasicHeaders = () => {
    const token = sessionStorage.getItem("userdata")
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': JSON.parse(token)
    }
}
