import axios from "axios";
import { TodoType } from "../store/todo";
import { AccessType } from "../store/auth";
import auth from "../store/auth";

const api = axios.create();

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*'; 
api.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`; 

export const method = {
    getTodos() {
        return api.get<TodoType[]>(`https://jsonplaceholder.typicode.com/todos`)
    },
    login(_data) {
        return api.post<AccessType>(`http://api.films.peabody28.com/Login`, {..._data})
    },
    getFilms() {
        return api.get(`http://api.films.peabody28.com/Film`)
    }
}