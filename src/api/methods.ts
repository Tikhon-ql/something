import axios from "axios";

const api = axios.create();

type TimeParams = {
    timezone: string,
    city: string
}

export const method = {
    getTime(params: TimeParams = {timezone: "Europe", city: "Minsk"}) {
        return api.get(`http://worldtimeapi.org/api/timezone/${params.timezone}/${params.city}`)
    } 
}