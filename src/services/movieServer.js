import http from "./httpServices/httpService"
import { toast } from "react-toastify"
import { apiUrl } from "../config.json"



const getSMovies = async () => {
    const response = await http.get(`${apiUrl}/movies`);
    return response.data
}

export const getSMovie = async (id) => {
    try {
        const response = await http.get(`${apiUrl}/movies/${id}`);
        return response.data
    } catch (error) {
        if (error.response && error.response === 404)
            toast.error("Movie does not exist")

        return null
    }

}

export const delMovie = async (id) => {
    try {
        return await http.delete(`${apiUrl}/movies/${id}`)
    } catch (error) {
        if (error.response && error.response === 404)
            console.log("failed")
        toast.error("Movie does not exist")

        return null
    }
}

export const saveMovie = async (obj) => {
    try {
        if (obj._id) {
            const body = { ...obj }
            delete body._id;
            console.log(body)
            return await http.put(`${apiUrl}/movies/${obj._id}`, body)
        } else {
            return await http.post(`${apiUrl}/movies`, obj)
        }
    } catch (error) {
        if (error.response && error.response === 404)
            toast.error("Movie does not exist, Please refresh the page")

        return null
    }
}

export default getSMovies;



