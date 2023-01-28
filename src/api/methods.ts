import axios from "axios";
import { TodoType } from "../store/todo";
import { AccessType } from "../store/auth";
import auth from "../store/auth";
import { Film } from "../components/pages/films/Films";

const api = axios.create();

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) 
            window.location.href = '#/login'
      
});

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
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
    }
}