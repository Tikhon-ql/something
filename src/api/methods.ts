import axios from "axios";
import { TodoType } from "../store/todo";
import { AccessType } from "../store/auth";
import { Films, Film, AddFilm } from "../components/pages/films/Films";

const api = axios.create();

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401)  {
            localStorage.clear();
            window.location.href = '#/login'
            window.location.reload()
        }
});

api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`; 

export const method = {
    getTodos() {
        return api.get<TodoType[]>(`https://jsonplaceholder.typicode.com/todos`)
    },
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
        return api.get<Films>(`http://api.films.peabody28.com/User/Film`)
    },
    addFilm(_data: AddFilm) {
        return api.post(`http://api.films.peabody28.com/User/Film`, {..._data})
    },
}