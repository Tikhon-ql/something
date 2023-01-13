import axios from "axios";
import { TodoType } from "../store/todo";
import { TimeParams } from "../store/time";

const api = axios.create();

export const method = {
    getTime(params: TimeParams = {timezone: "Europe", city: "Minsk"}) {
        return api.get(`http://worldtimeapi.org/api/timezone/${params.timezone}/${params.city}`)
    }, 
    getTodos() {
        return api.get<TodoType[]>(`https://jsonplaceholder.typicode.com/todos`)
    }
}