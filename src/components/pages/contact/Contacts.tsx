import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container, PageHeadline } from '../../../styles/uiKit';
import header from '../../header/store/header';
import * as S from './_contacts-styles';
import Tg from "../../../styles/images/social-icons/tg.svg"
import Github from "../../../styles/images/social-icons/github.svg"
import Linkedin from "../../../styles/images/social-icons/linkdn.svg"
import { HeaderColors } from '../../../types/types';

const Contacts = observer(() => {

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.white})
    
        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    return (<>
        <S.MainSection>
            <Container>
                <PageHeadline className='headline'>Контакты</PageHeadline>
                <div className="wrapper">
                    <S.ContactSection>
                        <h2>Kiryl Harbacheuski</h2>
                        <p>Frontend</p>
                        <div className="social-links">
                            <a href='https://t.me/KirylHarbacheuski' target="_blank" className="svg-icon"><p>Telegram:</p> <img width="32px" height="32px" src={Tg} alt="telegramm" /></a>
                            <a href='https://www.linkedin.com/in/kiryl-harbacheuski-293b42243' target="_blank" className="svg-icon"><p>Linkedin:</p> <img width="32px" height="32px" src={Linkedin} alt="linkedin" /></a>
                            <a href='https://github.com/CyrilHorbacheuski' target="_blank" className="svg-icon"><p>GitHub:</p> <img width="32px" height="32px" src={Github} alt="github" /></a>
                        </div>
                    </S.ContactSection>

                    <S.ContactSection>
                        <h2>Maksim Harbacheuski</h2>
                        <p>Backend</p>
                        <div className="social-links">
                            <a href='https://t.me/lastuser42' target="_blank" className="svg-icon"><p>Telegram:</p> <img width="32px" height="32px" src={Tg} alt="telegramm" /></a>
                            <a href='https://www.linkedin.com/in/peabody28/' target="_blank" className="svg-icon"><p>Linkedin:</p> <img width="32px" height="32px" src={Linkedin} alt="linkedin" /></a>
                            <a href='https://github.com/peabody28' target="_blank" className="svg-icon"><p>GitHub:</p> <img width="32px" height="32px" src={Github} alt="github" /></a>
                        </div>
                    </S.ContactSection>
                </div>
            </Container>
        </S.MainSection>
    </>)
})

export default Contacts