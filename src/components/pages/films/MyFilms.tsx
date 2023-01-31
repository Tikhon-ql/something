import { useEffect, useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button, Input } from '../../../styles/uiKit';
import modal, { ModalType } from '../../../store/modal';
import { Container } from '../../../styles/uiKit';
import { method } from '../../../api/methods';
import { Background, FilmsSection, HeadSection } from './_films-styles';
import { Film, renderFilmsCondition } from './Films';
import header, { HeaderColors } from '../../../store/header';
import SingleFilm from './SingleFilm';

const MyFilms = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [filmsList, setFilmsList] = useState<Film[]>([])
    const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(20)
    const [searchState, setSearchState] = useState<string>()

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.dark, textColor: HeaderColors.white})
    
        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const films = (await method.getUserFilms()).data;
                console.log(films)
                setFilmsList(films?.films)    
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
        <Background className="myFilms">
            <Container minHeight={"100vh"} className="container">
                <HeadSection className="head">
                    <h1>Мои фильмы</h1>

                    <div className="search">
                        <Input onChange={(e) => setSearchState(e.target.value)} className="search-input" type="text" placeholder="Введите название или год" />
                    </div>
                </HeadSection>
                <FilmsSection className="films">
                    <div className="films__list">
                        {filmsList.map((film: Film, index) => 
                            renderFilmsCondition(film, index, searchState, visibleFilmsCount) &&
                            <SingleFilm film={film} />
                        )}
                    </div>
                    {filmsList?.length > 0 && <Button onClick={() => setVisibleFilmsCount(visibleFilmsCount+5)} className='films__btn showMore-btn'>Показать больше</Button>}
                </FilmsSection>
            </Container>
            <Loader isLoading={isLoading} />

            <Modal type={ModalType.justModal}>
                <h2>Это модальное окно</h2>
                <p>Тут может быть твой контент</p>
                <p>Но сейчас... Просто закрой меня?</p>
            </Modal>
        </Background>
    </>)
}

export default MyFilms;