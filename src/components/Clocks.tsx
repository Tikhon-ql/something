import { method } from '../api/methods';
import React, { useEffect, useState } from 'react';
import '../styles/_clocks.scss'

type DateTime = {
    date: string,
    dayOfYear: number,
}

const Clocks = () => {

    const [time, setTime] = useState<DateTime>()

    useEffect(() => {
        (async () => {
            try {
                const {datetime, day_of_year} = (await method.getTime({timezone: 'Europe', city: "Minsk"})).data

                const state: DateTime = {
                    date: new Date(datetime).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"2-digit", minute: "2-digit" , second: "2-digit" }),
                    dayOfYear: day_of_year
                }

                setTime(state)
            }
            catch(e) {
                console.error(e)
            }
        })()
    }, [])

    return (
        <div className="clocks">
            <div className="clocks__wrapper">
                <h3>World time</h3>
                <div>{time?.date}</div>
                <h3>Day of year</h3>
                <div>{time?.dayOfYear}</div>
            </div>
        </div>
    )
}

export default Clocks