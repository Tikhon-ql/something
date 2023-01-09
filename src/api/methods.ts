import axios from "axios";
import { TodoType } from "../store/todo";

const api = axios.create();

type TimeParams = {
    timezone: string,
    city: string
}

export const method = {
    getTime(params: TimeParams = {timezone: "Europe", city: "Minsk"}) {
        return api.get(`http://worldtimeapi.org/api/timezone/${params.timezone}/${params.city}`)
    }, 
    getTodos() {
        return api.get<TodoType[]>(`https://jsonplaceholder.typicode.com/todos`)
    }
}