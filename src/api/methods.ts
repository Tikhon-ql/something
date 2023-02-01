import axios from "axios";
import auth from "../components/pages/login/store/auth";
import { AccessType, Films, Film, AddFilmType } from "../types/types";

const api = axios.create();

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401)  {
            auth.exit()
        }
});

api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`; 

export const method = {
    login(_data) {
        return api.post<AccessType>(`http://api.films.peabody28.com/Login`, {..._data})
    },
    registration(_data) {
        return api.post<AccessType>(`http://api.films.peabody28.com/Registration`, {..._data})
    },
    getFilms() {
        return api.get<Film[]>(`http://api.films.peabody28.com/Film`)
    },
    getUserFilms() {
        return api.get<Film[]>(`http://api.films.peabody28.com/User/Film`)
    },
    addFilmToMyCollection(_data: AddFilmType) {
        return api.post(`http://api.films.peabody28.com/User/Film`, {..._data})
    },
    addFilmToDB(_data) {
        return api.post(`http://api.films.peabody28.com/Film`, {..._data})
    }
}