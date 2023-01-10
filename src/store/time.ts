import {makeAutoObservable} from "mobx"
import { method } from "../api/methods"

export type DateTime = {
    date: string,
    dayOfYear: number,
}

class Time {
    time: DateTime = {
        date: new Date().toLocaleString(),
        dayOfYear: 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    async getTime(setIsLoading: Function) {
        try {
            setIsLoading(true)
            const {datetime, day_of_year} = (await method.getTime({timezone: 'Europe', city: "Minsk"})).data

            this.time = {date: new Date(datetime).toLocaleDateString("ru", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"2-digit", minute: "2-digit" , second: "2-digit" }), dayOfYear: day_of_year}
        }
        catch(e) {
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }
}

export default new Time();