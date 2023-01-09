
import React from 'react';
import {Link} from 'react-router-dom'
import './_header.scss'
import Logo from '../../images/server.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <nav className="header__navigation">
                    <Link className="header__navigation-link logo" to="/"><img width="60px" src={Logo} alt="" /></Link>
                    <div className="pages">
                        <Link className="header__navigation-link" to="/clocks">Время</Link>
                        <Link className="header__navigation-link" to="/map">Карта</Link>
                        <Link className="header__navigation-link" to="/todos">Список дел</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header