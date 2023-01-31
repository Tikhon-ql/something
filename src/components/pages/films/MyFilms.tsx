import { useEffect, useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button, Input } from '../../../styles/uiKit';
import modal, { ModalType } from '../../../store/modal';
import { Container } from '../../../styles/uiKit';
import { method } from '../../../api/methods';
import { FilmsSection, HeadSection } from './_films-styles';
import { Film, toggleSubmenu, renderFilmsCondition } from './Films';

const MyFilms = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [filmsList, setFilmsList] = useState<Film[]>([])
    const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(20)
    const [searchState, setSearchState] = useState<string>()

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const filmsList: Film[] = (await method.getUserFilms()).data;

                setFilmsList(filmsList)    
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
            <HeadSection className="head">
                <h2>Мои фильмы</h2>

                <div className="search">
                    <Input onChange={(e) => setSearchState(e.target.value)} className="search-input" type="text" placeholder="Введите название фильма" />
                </div>
            </HeadSection>
            <FilmsSection className="films">
                <div className="films__list">
                    {filmsList.map((film, index) => 
                        renderFilmsCondition(film, index, searchState, visibleFilmsCount) &&
                        <div key={film.id} id={film.id} className='film-item'>
                            <div className="film-item__head">
                                <p className='film-item__head-name'>{film.title} - {film.directorName}, ({film.year})</p>
                                <p>{film.countryName}</p>
                                <div className="icon" onClick={(e) => {
                                    toggleSubmenu(film.id)
                                }} />
                            </div>
                            <div id={"submenu-" + film.id} className="film-item__submenu">
                                <p>{film.description}</p>
                            </div>
                        </div>
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
    </>)
}

export default MyFilms;