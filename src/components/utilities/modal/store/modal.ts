import {makeAutoObservable} from "mobx"
import { ModalType } from "../../../../types/types"

class Modal {
    modals = {
        mobileMenu: {
            isOpen: false,
        }, 
        justModal: {
            isOpen: false,
        },
        error: {
            isOpen: false,
            message: ""
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    toggle(_state: boolean, type: ModalType) {
        this.modals[type].isOpen = _state
    }
    setErrorMessage(_msg: string) {
        this.modals.error.message = _msg
    }   
}

export default new Modal();