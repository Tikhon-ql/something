import {makeAutoObservable} from "mobx"

class Header {
    isTransparent: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    toggle(_value: boolean) {
        this.isTransparent = _value;
        console.log(this.isTransparent)
    }
}

export default new Header();