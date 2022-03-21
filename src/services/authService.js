import http from "./httpServices/httpService"
import { apiUrl } from "../config.json"
import jwtDecoder from "jwt-decode"

const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token"

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password })
    localStorage.setItem(tokenKey, jwt)
}

function logOut() {
    localStorage.removeItem(tokenKey)
}
async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

function getToken() {
    return localStorage.getItem(tokenKey)
}
function getUser() {
    try {
        let jwt = localStorage.getItem(tokenKey)
        return jwtDecoder(jwt)
    } catch (error) {
        return null
    }

}

export default {
    login, logOut, getUser, loginWithJwt
}