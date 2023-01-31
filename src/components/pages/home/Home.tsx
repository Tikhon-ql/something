import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import header, { HeaderColors } from '../../../store/header';
import { Container, Button } from '../../../styles/uiKit';
import { MainSection, TextSection } from './_home-styles';
import { Navigate } from 'react-router-dom';


const Home = observer(() => {

    useEffect(() => {
        header.setIsTransparent(true, HeaderColors.white)

        return () => {
            header.setIsTransparent(false)
        };
    }, [])

    return (<>

        <MainSection className='image-block'>
            <Container>
                <div className="image-block__wrapper">
                    <h1>Films</h1>
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
            </Container>
        </TextSection>
    </>)
})

export default Home