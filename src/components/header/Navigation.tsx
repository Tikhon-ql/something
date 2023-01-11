import {Link} from 'react-router-dom'
import Modal from '../../components/utilities/modal/Modal';
import modal, { ModalType } from '../../store/modal';

const Links = ({type}) => {
    return <>
        <div className={`header__navigation-links ${type}`}>
            <Link className="header__navigation-link" to="/clocks" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Время</Link>
            <Link className="header__navigation-link" to="/todos" onClick={() => modal.toggle(false, ModalType.mobileMenu)}>Список дел</Link>
        </div>
    </>
}

const Navigation = () => {
    return <>
        <nav className="header__navigation">
            <Links type={"desktop"}/>
            <div className="header__navigation-burger" onClick={() => modal.toggle(true, ModalType.mobileMenu)}><div></div></div>
        </nav>

        <Modal type={ModalType.mobileMenu}>
            <Links type={"mobile"}/>
        </Modal>
    </>
}

export default Navigation