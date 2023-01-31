import {Link} from 'react-router-dom'
import Modal from '../utilities/modal/Modal';
import modal, { ModalType } from '../../store/modal';
import auth from '../../store/auth';

export const Links = ({type}) => {
    return <>
        <div className={`navigation-links ${type}`}>
            <Link className="navigation-link" to="/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Главная</Link>
            {auth.isAuth &&
                <div className='dropdown-link'>
                    <Link className="navigation-link" to="/films/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Фильмы</Link>

                    <div  className='dropdown-link__list'>
                        <Link className="navigation-link" to="/films/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Все фильмы</Link>
                        <Link className="navigation-link" to="/films/my-collection/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Моя подборка</Link>
                        <Link className="navigation-link" to="/films/genres/" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Жанры</Link>
                    </div>

                </div>
            }
            {auth.isAuth
            ?<Link className="navigation-link" to="/account" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Аккаунт</Link>
            :<Link className="navigation-link" to="/login" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Логин</Link>
            }
        </div>
    </>
}

const HNavigation = () => {
    return (
        <nav className="header__navigation">
            <Links type={"desktop"}/>
            <div className="header__navigation-burger" onClick={() => modal.toggle(true, ModalType.mobileMenu)}><div></div></div>
            <Modal type={ModalType.mobileMenu}>
                <Links type={"mobile"}/>
            </Modal>
        </nav>
    )
}

export default HNavigation