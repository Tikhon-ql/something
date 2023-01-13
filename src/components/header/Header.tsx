import {Link} from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import './_header.scss'
import Logo from '../../images/server.svg'
import Navigation from './HNavigation';
import { Container } from '../../styles/uiKit';
import header from '../../store/header';

const Header = observer(() => {
    return (
        <header id="header" className={`header${header.isTransparent?" transparent":""}`}>
            <Container className="container">
                <div className="header__wrapper">
                    <Link className="header__navigation-link logo" to="/"><img width="60px" src={Logo} alt="" /></Link>
                    <Navigation />
                </div>
            </Container>
        </header>
    )
})

export default Header