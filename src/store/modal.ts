import {makeAutoObservable} from "mobx"

export enum ModalType {
    mobileMenu = "mobileMenu",
    justModal = "justModal",
    error = "error"
}

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