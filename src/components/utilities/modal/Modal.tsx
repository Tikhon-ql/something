import './_modal-template.scss'
import CloseBtn from '../../../images/close.svg'
import modal, { ModalType } from '../../../store/modal'
import React, { useEffect, FC, useState } from 'react';
import {observer} from "mobx-react-lite"

const Modal: FC<{children: React.ReactNode, type: ModalType}> = observer(({children, type}) => {
    document.body.style.overflowY = modal.modals[type].isOpen?'hidden':'scroll';

    return <>
        {modal.modals[type].isOpen &&

        <div className={`modal ${type}`}>
            <div className="modal__inner">
                <div onClick={() => modal.toggle(false, type)} className="modal__close-btn"><img src={CloseBtn} alt="" /></div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>}
    </>
})

export default Modal
