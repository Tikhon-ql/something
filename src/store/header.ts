import {makeAutoObservable} from "mobx"

export enum HeaderColors {
    dark = "dark",
    white = "white"
}
export type HeaderStyle = {
    isTransparent: boolean,
    color: HeaderColors,
}

class Header {
    headerStyle: HeaderStyle = {
        isTransparent: false,
        color: HeaderColors.white
    }

    constructor() {
        makeAutoObservable(this)
    }

    setIsTransparent(_value: boolean, _color?: HeaderColors) {
        this.headerStyle.isTransparent = _value;
        this.headerStyle.color = _color;
    }
}

export default new Header();