
import React from 'react';
import {Link} from 'react-router-dom'
import './_header.scss'
import Logo from '../../images/server.svg'
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link className="header__navigation-link logo" to="/"><img width="60px" src={Logo} alt="" /></Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header