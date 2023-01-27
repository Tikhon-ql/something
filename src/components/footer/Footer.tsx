
import { Links } from '../../components/header/HNavigation';
import { Container } from '../../styles/uiKit';
import { SiteFooter } from './_footer-styles';
import Inst from "../../styles/images/social-icons/inst.svg"
import Vk from "../../styles/images/social-icons/vk.svg"
import Tg from "../../styles/images/social-icons/tg.svg"
import Github from "../../styles/images/social-icons/github.svg"
import Linkedin from "../../styles/images/social-icons/linkdn.svg"

const Footer = () => {
    return (
        <SiteFooter className="footer">
            <Container style={{padding: "2rem"}}>
                <div className="footer__wrapper">
                    <nav className="footer__navigation">
                        <Links type={"for-footer"}/>
                        <div className="footer__social-links">
                            {/* <a href='https://www.instagram.com/k.harbacheuski/' target="_blank" className="svg-icon"><img width="32px" height="32px" src={Inst} alt="intagramm" /></a> */}
                            {/* <a href='https://vk.com/flipperralfi' target="_blank" className="svg-icon"><img width="32px" height="32px" src={Vk} alt="vkontakte" /></a> */}
                            <a href='https://t.me/KirylHarbacheuski' target="_blank" className="svg-icon"><img width="32px" height="32px" src={Tg} alt="telegramm" /></a>
                            <a href='https://github.com/CyrilHorbacheuski' target="_blank" className="svg-icon"><img width="32px" height="32px" src={Github} alt="github" /></a>
                            <a href='https://www.linkedin.com/in/kiryl-harbacheuski-293b42243' target="_blank" className="svg-icon"><img width="32px" height="32px" src={Linkedin} alt="linkedin" /></a>
                        </div>
                    </nav>
                </div>
            </Container>
        </SiteFooter>
    )
}

export default Footer