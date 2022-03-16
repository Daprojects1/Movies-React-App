import http from "./httpServices/httpService";
import { apiUrl } from "../config.json"

const getSGenres = async () => {
    const response = await http.get(`${apiUrl}/genres`);
    return response.data
}

export { getSGenres }