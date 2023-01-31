import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container } from '../../../styles/uiKit';
import header, { HeaderColors } from '../../../store/header';
import Earth from "../../../styles/images/earth.jpg"
import { MainSection, ContactSection } from './_contacts-styles';
import Tg from "../../../styles/images/social-icons/tg.svg"
import Github from "../../../styles/images/social-icons/github.svg"
import Linkedin from "../../../styles/images/social-icons/linkdn.svg"

const Contacts = observer(() => {

    useEffect(() => {
        header.setIsTransparent({isTransparent: true, color: HeaderColors.white})
    
        return () => {
            header.setIsTransparent({isTransparent: false})
        };
    }, [])

    return (<>
        <MainSection>
            <Container>
                <h2 className='headline'>Контакты</h2>
                <div className="wrapper">
                    <ContactSection>
                        <h2>Kiryl Harbacheuski</h2>
                        <p>Frontend</p>
                        <div className="social-links">
                            <a href='https://t.me/KirylHarbacheuski' target="_blank" className="svg-icon"><p>Telegram:</p> <img width="32px" height="32px" src={Tg} alt="telegramm" /></a>
                            <a href='https://www.linkedin.com/in/kiryl-harbacheuski-293b42243' target="_blank" className="svg-icon"><p>Linkedin:</p> <img width="32px" height="32px" src={Linkedin} alt="linkedin" /></a>
                            <a href='https://github.com/CyrilHorbacheuski' target="_blank" className="svg-icon"><p>GitHub:</p> <img width="32px" height="32px" src={Github} alt="github" /></a>
                        </div>
                    </ContactSection>

                    <ContactSection>
                        <h2>Maksim Harbacheuski</h2>
                        <p>Backend</p>
                        <div className="social-links">
                            <a href='https://t.me/lastuser42' target="_blank" className="svg-icon"><p>Telegram:</p> <img width="32px" height="32px" src={Tg} alt="telegramm" /></a>
                            <a href='https://www.linkedin.com/in/peabody28/' target="_blank" className="svg-icon"><p>Linkedin:</p> <img width="32px" height="32px" src={Linkedin} alt="linkedin" /></a>
                            <a href='https://github.com/peabody28' target="_blank" className="svg-icon"><p>GitHub:</p> <img width="32px" height="32px" src={Github} alt="github" /></a>
                        </div>
                    </ContactSection>
                </div>
            </Container>
        </MainSection>
    </>)
})

export default Contacts