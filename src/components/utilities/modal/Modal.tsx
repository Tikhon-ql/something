import './_modal-template.scss'
import CloseBtn from '../../../images/close.svg'

const Modal = ({modalState, ...props}) => {

    const closeModal = () => modalState?.setIsOpen(false)

    document.body.style.overflowY = modalState?.isOpen?'hidden':'scroll'
    
    return <>
        {modalState?.isOpen &&

        <div className="modal">
            <div className="modal__inner">
                <div onClick={() => closeModal()} className="modal__close-btn"><img src={CloseBtn} alt="" /></div>
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
        </div>}
    </>
}

export default Modal
