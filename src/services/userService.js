import http from "./httpServices/httpService"
import { apiUrl } from "../config.json"


export async function registerUser(user) {
    return await http.post(`${apiUrl}/users`, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}