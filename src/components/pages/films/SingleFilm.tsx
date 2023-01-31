import { toggleSubmenu, AddFilm } from "./Films"
import { Button } from "../../../styles/uiKit"
import { method } from "../../../api/methods"
import modal from "../../../store/modal"

const addFilm = (data: AddFilm) => {
    (async () => {
        try {
            await method.addFilm({filmId: data.filmId});   
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
    })()
}

const SingleFilm = ({film, addFilmBtn = false}) => {
    return (
        <div id={film.id} className='film-item'>
            <div className="film-item__head">
                <p className='film-item__head-name'>{film.title}, ({film.year}) <span style={{fontWeight: 400}}>({film?.ratings[0].ratingTypeName}: {film?.ratings[0].value})</span></p>
                <p>{film.countryName}</p>
                <div className="icon" onClick={(e) => {
                    toggleSubmenu(film.id)
                }} />
                {addFilmBtn && <Button className='film-item__add' onClick={() => addFilm({filmId: film.id})}>Добавить к себе</Button>}
            </div>
            <div id={"submenu-" + film.id} className="film-item__submenu">
                <p>{film.description}</p>
            </div>
        </div>
    )
}
export default SingleFilm