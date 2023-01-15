import {makeAutoObservable} from "mobx"

class Header {
    isTransparent: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    setIsTransparent(_value: boolean) {
        this.isTransparent = _value;
    }
}

export default new Header();