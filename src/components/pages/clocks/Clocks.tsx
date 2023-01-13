import { useEffect, useState } from 'react';
import './_clocks.scss'
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button } from '../../../styles/uiKit';
import time from '../../../store/time';
import modal, { ModalType } from '../../../store/modal';

const Clocks = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    useEffect(() => {
        time.getTime(setIsLoading)
    }, [])

    return <>
        <div className="clocks">
            <div className="clocks__wrapper">
                <div>
                    <h3 className="subheadline">Дата и время</h3>
                    <span>{time?.time.date}</span>
                </div>
                <div>
                    <h3 className="subheadline">День года</h3>
                    <span>{time?.time.dayOfYear}</span>
                </div>
            </div>
            <Button onClick={() => time.getTime(setIsLoading)}>Нажми чтобы обновить время!</Button>
            <p className="clocks__info" onClick={() => modal.toggle(true, ModalType.justModal)}>Показать информацию</p>
        </div>

        <Loader isLoading={isLoading} />

        <Modal type={ModalType.justModal}>
            <h2>Это модальное окно</h2>
            <p>Тут может быть твой контент</p>
            <p>Но сейчас... Просто закрой меня?</p>
        </Modal>
    </>
}

export default Clocks