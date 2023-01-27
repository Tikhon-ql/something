import { useEffect, useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button } from '../../../styles/uiKit';
import modal, { ModalType } from '../../../store/modal';
import { Container } from '../../../styles/uiKit';
import { method } from '../../../api/methods';
import { FilmsSection } from './_films-styles';

export type Film = {
    countryName: string
    description: string
    directorName: string
    title: string
    year: number
}

const Films = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [filmsList, setFilmsList] = useState<Film[]>()

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const filmsList: Film[] = (await method.getFilms()).data;

                setFilmsList(filmsList)

                console.log(filmsList)
                
            }
            catch(e) {
                modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [])

    return (<>
        <Container minHeight={"100vh"} className="container">
            <FilmsSection className="films">
                <div className="films__list">
                </div>
            </FilmsSection>
        </Container>
        <Loader isLoading={isLoading} />

        <Modal type={ModalType.justModal}>
            <h2>Это модальное окно</h2>
            <p>Тут может быть твой контент</p>
            <p>Но сейчас... Просто закрой меня?</p>
        </Modal>
    </>)
}

export default Films