import {Link} from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import Logo from '../../styles/images/camera.svg'
import LogoW from '../../styles/images/camera-white.svg'
import Navigation from './Navigation';
import { Container } from '../../styles/uiKit';
import headerStore from './store/header';
import { SiteHeader } from './_header-styles';
import { HeaderColors } from '../../types/types';

const Header = observer(() => {
    return (
        <SiteHeader id="header" className={`header ${headerStore.headerStyle.isTransparent?`transparent ${headerStore.headerStyle.color} text-${headerStore.headerStyle.textColor}`:""}`}>
            <Container className="container">
                <div className="header__wrapper">
                    <Link className="navigation-link logo" to="/"><img width="60px" src={headerStore.headerStyle.textColor == HeaderColors.white?LogoW:Logo} alt="" /></Link>
                    <Navigation />
                </div>
            </Container>
        </SiteHeader>
    )
})

export default Header