import {Link} from 'react-router-dom'
import Modal from '../utilities/modal/Modal';
import modal from '../utilities/modal/store/modal';
import auth from '../pages/login/store/auth';
import { Button } from '../../styles/uiKit';
import headerStore  from './store/header';
import { ModalType } from '../../types/types';

export const Links = ({type}) => {
    return <>
        <div className={`navigation-links ${type}`}>
            <Link className="navigation-link" to="/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Главная</Link>
            {auth.isAuth && <>
                <Link className="navigation-link" to="/films/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Все фильмы</Link>
                <Link className="navigation-link" to="/films/my-collection/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Моя подборка</Link>
            </>}
            <Link className="navigation-link" to="/contacts" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Контакты</Link>
            {!auth.isAuth &&
            <Link className="navigation-link" to="/login" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>
                <Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}}>Войти</Button>
            </Link>}
            {auth.isAuth && <a className="navigation-link"><Button className="btn" style={{padding: "1rem 3rem", fontSize: "15px", borderRadius: "3rem"}} onClick={() => auth.isAuth && auth.exit()}>Выйти</Button></a>}
        </div>
    </>
}

const Navigation = () => {
    return (
        <nav className="header__navigation">
            <Links type={"desktop"}/>
            <div className={`header__navigation-burger text-${headerStore.headerStyle.textColor}`} onClick={() => modal.toggle(true, ModalType.mobileMenu)}><div></div></div>
            <Modal type={ModalType.mobileMenu}>
                <Links type={"mobile"}/>
            </Modal>
        </nav>
    )
}

export default Navigation