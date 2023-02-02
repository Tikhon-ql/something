import axios from "axios";
import auth from "../components/pages/login/store/auth";
import { AccessType, Film, AddFilmType } from "../types/types";

const api = axios.create({
    baseURL: "http://api.films.peabody28.com",
    headers: {
        ['Authorization']: `Bearer ${localStorage.getItem("accessToken")}`,
        ['Content-Type']: "application/json; charset=utf8"
    }
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401)  {
            auth.exit()
        }
});


export const method = {
    login(_data) {
        return api.post<AccessType>(`/Login`, {..._data})
    },
    registration(_data) {
        return api.post<AccessType>(`/Registration`, {..._data})
    },
    getFilms() {
        return api.get<Film[]>(`/Film`)
    },
    getUserFilms() {
        return api.get<Film[]>(`/User/Film`)
    },
    addFilmToMyCollection(_data: AddFilmType) {
        return api.post(`/User/Film`, {..._data})
    },
    deleteFilmFromMyCollection(_data) {
        console.log(_data)
        return api.delete(`/User/Film`, {..._data})
    },
    addFilmToDB(_data) {
        return api.post(`/Film`, {..._data})
    }
}