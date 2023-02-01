import { useEffect, useState } from 'react';
import Loader from '../../utilities/loader/Loader';
import Modal from '../../utilities/modal/Modal'
import { Button, Input, $White } from '../../../styles/uiKit';
import modal from '../../utilities/modal/store/modal';
import { Container, PageHeadline } from '../../../styles/uiKit';
import { method } from '../../../api/methods';
import { FilmsSection, HeadSection, Background, AddFilm, ModalContent } from './_films-styles';
import SingleFilm from './SingleFilm';
import header from '../../header/store/header';
import { ModalType, HeaderColors, Film, FilmsType } from '../../../types/types';

export const toggleSubmenu = (_id) => {
    let element = document.getElementById(`${_id}`);
    element.classList.toggle("open");  
} 

export const renderFilmsCondition = (film: Film, index, searchState, visibleFilmsCount) => {
    if(searchState?.length > 0) {
        if(film.title.includes(searchState) || film.directorName.includes(searchState) || film.year.toString().includes(searchState))
            return true
        else return false
    }
    else if(index+1 < visibleFilmsCount)
        return true
}

const Films = ({type}) => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [filmsList, setFilmsList] = useState<Film[]>([])
    const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(8)
    const [searchState, setSearchState] = useState<string>()

    const [reload, setReload] = useState<boolean>(false)

    const [addFilmData, setAddFilmDate] = useState({
        countryCode: "",
        description: "",
        directorName: "",
        title: "",
        year: 0,
        ratingValue: 10,
        RatingTypeName: "Kinopoisk"
    })

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.dark, textColor: HeaderColors.white})
        console.log(addFilmData)

        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                let filmsList = [];

                switch(type) {
                    case FilmsType.all: {
                        filmsList = (await method.getFilms()).data
                    }; break;
                    case FilmsType.my: {
                        filmsList = (await method.getUserFilms()).data;
                        console.log(filmsList)
                    }; break;
                    default: {
                        filmsList = (await method.getFilms()).data
                    }
                }
                setFilmsList(filmsList)    
            }
            catch(e) {
                modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [type, reload])

    const addFilmHandle = async () => {
        try {
            setIsLoading(true)
            
            await method.addFilmToDB(addFilmData)
            setReload(!reload)
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
        finally {
            setIsLoading(false)
        }
    }

 
    return (<>
        <Background className="background">
            <Container minHeight={"100vh"} className="container">
                <HeadSection className="head">
                    <PageHeadline>
                        {type == FilmsType.all?"Все фильмы":"Мои фильмы"}
                    </PageHeadline>

                    <Input onChange={(e) => setSearchState(e.target.value)} className="search-input" type="text" placeholder="Введите название или год" />
                    {type == FilmsType.all && <p className='allFilmsCount'>Всего фильмов: {filmsList.length}</p>}

                </HeadSection>
                <FilmsSection className="films">
                    <div className="films__list">
                        {filmsList?.length > 0
                            ?filmsList.map((film: Film, index) => 
                                renderFilmsCondition(film, index, searchState, visibleFilmsCount) &&
                                <SingleFilm type={type} key={film.id} film={film}  />
                            )
                        : <p style={{color: $White}}>В вашей коллекции нет ни одного фильма : (</p>
                        }
                    </div>
                    {filmsList?.length > 0 && <Button onClick={() => setVisibleFilmsCount(visibleFilmsCount+5)} className='films__btn showMore-btn'>Показать больше</Button>}
                </FilmsSection>

                {type == FilmsType.all &&<AddFilm>
                    <div className="wrapper">
                        <h3 style={{color: $White, textAlign: "center"}} className='message'>Не нашли фильм? Добавьте сами!</h3>
                        <Button onClick={() => modal.toggle(true, ModalType.justModal)}>Добавить фильм</Button>
                    </div>
                </AddFilm>}
            </Container>
            <Loader isLoading={isLoading} />

            <Modal type={ModalType.justModal}>
                <ModalContent>
                    <h3 style={{marginBottom: "4rem"}}>Введите данные для фильма</h3>
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, title: e.target.value})} className="search-input" type="text" placeholder="Введите название" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, year: e.target.value})} className="search-input" type="text" placeholder="Введите год" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, directorName: e.target.value})} className="search-input" type="text" placeholder="Введите имя режиссера" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, countryCode: e.target.value})} className="search-input" type="text" placeholder="Введите страну" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, description: e.target.value})} className="search-input" type="text" placeholder="Введите описание" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, ratingValue: e.target.value})} className="search-input" type="number" placeholder="Введите рейтинг" />
                    <Input onChange={(e) => setAddFilmDate({...addFilmData, RatingTypeName: e.target.value})} className="search-input" type="text" placeholder="А чей рейтинг?" />
                    <Button style={{marginTop: "4rem", minWidth: "40rem"}} white onClick={() => addFilmHandle()}>Добавить</Button>
                </ModalContent>
            </Modal>
        </Background>
    </>)
}

export default Films