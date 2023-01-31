import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import header, { HeaderColors } from '../../../store/header';
import { Container } from '../../../styles/uiKit';
import { MainSection, TextSection } from './_home-styles';
import HeadSet from "../../../styles/images/home/headset.jpg"
import q from "../../../styles/images/i.png"


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
                    <h1>О всяком</h1>
                    <span className='paragraph' style={{fontStyle: "italic"}}>developed with ReactJS</span>
                </div>
            </Container>
        </MainSection>

        
        <TextSection className="text">
            <Container style={{position: "relative"}}>
                <h3>Что Это?</h3>
                <p className='paragraph'>
                    Сайт для взаимодействия с сервером и ресурсами на нём
                    <br />
                    <br />
                    Идея создания сайта сформировалась в тот момент, когда после просмотра одного очень неплохого фильма, пользователь не нашел места, куда записать его название.
                    Заметки в телефоне он пробовал, это не совсем удобно: нет поиска, фильмы там могу повторяться, да и вообще. Кроме названия фильма хочется хранить свою краткую рецензию на него,
                    оценку от 0 до 10 в удобном читабельном виде. С возможностью добавить или найти забытый фильм.  
                </p>

                <h3>Зачем все это?</h3>
                <p className='paragraph'>
                    Верно: cоздавать целый сайт лишь для того, чтобы хранить там список фильмов - нерационально, мягко говоря.
                    Благо, имея под рукой статический IP, есть где развернуться. На сервере храняться книги, фильмы, музыка. Можно обращаться к этим файлам через адресную строку,
                    а можно через удобный UI отсылать api запросы, ответом на которые и будет искомый ресурс.  
                </p>
            </Container>
            
            {/* <div className='image'>
                <Container style={{position: "relative"}}>
                    <div className="image-wrapper">
                        <img src={HeadSet} alt="" />
                    </div>
                </Container>
            </div> */}
            
            <Container>
                <h3>Какие еще идеи?</h3>
                <ul className='list'>
                    <li><span>Радио:</span> можно будет стримить кучу альбомов музыки прямо отсюда! (правда музыка будет не ваша)</li>
                    <li><span>Просмотр фильмов:</span> тоже самое что и радио, только с картинкой : )</li>
                    <li><span>Хранение собственных файлов:</span> можно будет использовать сервер как облако с данными, которыми можно будет управлять</li>
                </ul>
            </Container>
        </TextSection>
        
    </>)
})

export default Home