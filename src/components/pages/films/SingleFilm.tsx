import { toggleSubmenu } from "./Films"
import { FilmsType, AddFilmType } from '../../../types/types';
import { method } from "../../../api/methods"
import modal from "../../utilities/modal/store/modal"
import { useState } from "react"
import { FilmItem, FilmItemHead, AddFilmBtn, FilmSubmenu } from "./_films-styles"
import { $White } from "../../../styles/uiKit"

const addFilm = (data: AddFilmType) => {
    (async () => {
        try {
            await method.addFilmToMyCollection({filmId: data.filmId});   
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
    })()
}

const deleteFilm = (data) => {
    (async () => {
        try {
            await method.deleteFilmFromMyCollection({id: data.filmId});   
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
    })()
}

const SingleFilm = ({film, type, setReload}) => {
    const [btnText, setBtnText] = useState<string>(type == FilmsType.all?"Добавить к себе":"Удалить из подборки");
    const [isFilmAlreadyAdded, setIsFilmAlreadyAdded] = useState<boolean>(false)

    return (
        <FilmItem id={film.id} className='film-item'>
            <FilmItemHead className="film-item__head">
                <p className='film-item__head-name'>{film.title}, ({film.year}) <span style={{fontWeight: 400}}>({film?.ratings[0].ratingTypeName}: {film?.ratings[0].value})</span></p>
                <p>{film.countryName}</p>
                <div className="icon" onClick={() => {
                    toggleSubmenu(film.id)
                }} />
                {type == FilmsType.all && <AddFilmBtn className='film-item__add' onClick={async (e) => {
                    !isFilmAlreadyAdded && await addFilm({filmId: film.id})
                    setBtnText("Добавлен")
                    setIsFilmAlreadyAdded(true)
                }}>{btnText}</AddFilmBtn>}

                {type == FilmsType.my && <AddFilmBtn className='film-item__delete' onClick={async (e) => {
                    await deleteFilm({filmId: film.id})
                    setReload(true)
                }}>{btnText}</AddFilmBtn>}
            </FilmItemHead>
            <FilmSubmenu id={"submenu-" + film.id} className="film-item__submenu">
                <p style={{color: $White}}>{film.description}</p>
            </FilmSubmenu>
        </FilmItem>
    )
}
export default SingleFilm