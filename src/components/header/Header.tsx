import {Link} from 'react-router-dom'
import './_header.scss'
import Logo from '../../images/server.svg'
import Navigation from './HNavigation';
import { Container } from '../../styles/uiKit';

const Header = () => {
    return (
        <header className="header">
            <Container className="container" style={{padding: "2rem"}}>
                <div className="header__wrapper">
                    <Link className="header__navigation-link logo" to="/"><img width="60px" src={Logo} alt="" /></Link>
                    <Navigation />
                </div>
            </Container>
        </header>
    )
}

export default Header