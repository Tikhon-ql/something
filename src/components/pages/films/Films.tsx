import { useEffect, useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button, Input } from '../../../styles/uiKit';
import modal, { ModalType } from '../../../store/modal';
import { Container } from '../../../styles/uiKit';
import { method } from '../../../api/methods';
import { FilmsSection, HeadSection } from './_films-styles';

export type Film = {
    countryName: string
    description: string
    directorName: string
    id: string
    title: string
    year: number
}
export type AddFilm = {
    filmId: string
    sectionName?: string
}
export const toggleSubmenu = (_id) => {
    let element = document.getElementById(`${_id}`);
    element.classList.toggle("open");  
} 

export const renderFilmsCondition = (film, index, searchState, visibleFilmsCount) => {
    if(searchState?.length > 0) {
        if(film.title.includes(searchState) || film.directorName.includes(searchState) || film.year.toString().includes(searchState))
            return true
        else return false
    }
    else if(index+1 < visibleFilmsCount)
        return true
}

const Films = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [filmsList, setFilmsList] = useState<Film[]>([])
    const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(20)
    const [searchState, setSearchState] = useState<string>()

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const filmsList: Film[] = (await method.getFilms()).data;

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

    const addFilm = (data: AddFilm) => {
        (async () => {
            try {
                setIsLoading(true)
                const response = (await method.addFilm({filmId: data.filmId})).data;   
            }
            catch(e) {
                modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
            }
            finally {
                setIsLoading(false)
            }
        })()
    }
 
    return (<>
        <Container minHeight={"100vh"} className="container">
            <HeadSection className="head">
                <h2>Фильмы которые ты когда либо смотрел</h2>

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
                                <Button className='film-item__add' onClick={() => addFilm({filmId: film.id})}>Добавить к себе</Button>
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

export default Films