import {Link} from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import Logo from '../../styles/images/camera.png'
import Navigation from './HNavigation';
import { Container } from '../../styles/uiKit';
import headerStore from '../../store/header';
import { SiteHeader } from './_header-styles';

const Header = observer(() => {
    return (
        <SiteHeader id="header" className={`header ${headerStore.headerStyle.isTransparent?`transparent ${headerStore.headerStyle.color}`:""}`}>
            <Container className="container">
                <div className="header__wrapper">
                    <Link className="navigation-link logo" to="/"><img width="60px" src={Logo} alt="" /></Link>
                    <Navigation />
                </div>
            </Container>
        </SiteHeader>
    )
})

export default Header