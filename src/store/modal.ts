import {makeAutoObservable} from "mobx"

export enum ModalType {
    mobileMenu = "mobileMenu",
    justModal = "justModal"
}

class Modal {
    modals = {
        mobileMenu: {
            isOpen: false,
        }, 
        justModal: {
            isOpen: false,
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    toggle(_state: boolean, type: ModalType) {
        this.modals[type].isOpen = _state
    }
}

export default new Modal();