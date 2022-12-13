import { method } from '../api/methods';
import React, { useEffect, useState } from 'react';
import '../styles/_clocks.scss'
import Loader from './utilities/Loader';
import Modal from './utilities/Modal'

type DateTime = {
    date: string,
    dayOfYear: number,
}

const Clocks = () => {

    const [time, setTime] = useState<DateTime>()
    const [reload, setReload] = useState<Boolean>(false)
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    const [isOpen, setIsOpen] = useState<Boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
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
            finally {
                setIsLoading(false)
            }
        })()
    }, [reload])

    return <>
        <div className="clocks">
            <div className="clocks__wrapper">
                <div>
                    <h3 className="subheadline">Local time</h3>
                    <span>{time?.date}</span>
                </div>
                <div>
                    <h3 className="subheadline">Day of year</h3>
                    <span>{time?.dayOfYear}</span>
                </div>
            </div>
            <div className="clocks__update-btn" onClick={() => setReload(!reload)}>Click to update time</div>
            <p className="clocks__info" onClick={() => setIsOpen(!isOpen)}>Show info</p>
        </div>

        <Loader isLoading={isLoading} />
        <Modal modalState={{isOpen, setIsOpen}}>
            <h2>It is modal window!</h2>
            <p>Here may be your content</p>
            <p>But now... Just close me... </p>
        </Modal>
    </>
}

export default Clocks