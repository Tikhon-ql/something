
import { Links } from '../../components/header/HNavigation';
import { Container } from '../../styles/uiKit';
import './_footer.scss'


const Footer = () => {
    return (
        <footer className="footer">
            <Container style={{padding: "4rem 2rem"}}>
                <div className="footer__wrapper">
                    <nav className="footer__navigation">
                        <Links type={"for-footer"}/>
                    </nav>
                </div>
            </Container>
        </footer>
    )
}

export default Footer