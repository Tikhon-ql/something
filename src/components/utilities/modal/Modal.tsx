import './_modal-template.scss'

const Modal = ({modalState, ...props}) => {

    const closeModal = () => modalState?.setIsOpen(false)

    return <>
        {modalState?.isOpen &&

        <div className="modal">
            <div className="modal__inner">
                <div onClick={() => closeModal()} className="modal__close-btn"></div>
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
        </div>}
    </>
}

export default Modal
