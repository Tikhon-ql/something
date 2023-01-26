
import { Links } from '../../components/header/HNavigation';
import { Container } from '../../styles/uiKit';
import { SiteFooter } from './_footer-styles';

const Footer = () => {
    return (
        <SiteFooter className="footer">
            <Container style={{padding: "2rem"}}>
                <div className="footer__wrapper">
                    <nav className="footer__navigation">
                        <Links type={"for-footer"}/>
                    </nav>
                </div>
            </Container>
        </SiteFooter>
    )
}

export default Footer