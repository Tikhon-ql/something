import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import header from '../../header/store/header';
import { Container, Button, PageHeadline } from '../../../styles/uiKit';
import { MainSection, TextSection } from './_home-styles';
import modal from '../../utilities/modal/store/modal';
import auth from '../login/store/auth';
import { Link } from 'react-router-dom';
import { ModalType, HeaderColors } from "../../../types/types"


const Home = observer(() => {

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.white})

        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    return (<>

        <MainSection className='image-block'>
            <Container>
                <div className="image-block__wrapper">
                    <PageHeadline>Films</PageHeadline>
                    <span className='paragraph' style={{fontStyle: "italic"}}>developed with ReactJS</span>
                </div>
            </Container>
        </MainSection>

        
        <TextSection className="text">
            <Container style={{position: "relative"}}>
                <h3>Что это за сайт?</h3>
                <p className='paragraph'>
                    Где хранить список просмотренных фильмов?
                    <br />
                    <br />
                    Идея создания сайта сформировалась в тот момент, когда после просмотра одного очень неплохого фильма, пользователь не нашел места, куда записать его название.
                    Заметки в телефоне он пробовал, это не совсем удобно: нет поиска, фильмы там могу повторяться, да и вообще. Кроме названия фильма хочется хранить свою краткую рецензию на него,
                    оценку от 0 до 10 в удобном читабельном виде. С возможностью добавить или найти забытый фильм.  
                </p>
                <div className="links">
                    {auth.isAuth && <>
                        <Link className="link" to="/films/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>
                            <Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}}>Все фильмы</Button>
                        </Link>
                        <Link className="link" to="/films/my-collection/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>
                            <Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}}>Моя подборка</Button>
                        </Link>
                    </>}
                    <Link className="link" to="/contacts" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>
                        <Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}}>Контакты</Button>
                    </Link>
                    {!auth.isAuth &&
                    <Link className="link" to="/login" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>
                        <Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}}>Логин</Button>
                    </Link>}
                </div>
            </Container>
        </TextSection>
    </>)
})

export default Home