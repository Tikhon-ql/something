import {makeAutoObservable} from "mobx"

export enum HeaderColors {
    dark = "dark",
    white = "white"
}
export type HeaderStyle = {
    isTransparent: boolean,
    color?: HeaderColors,
    textColor?: HeaderColors
}

class Header {
    headerStyle: HeaderStyle = {
        isTransparent: false,
        color: HeaderColors.white,
        textColor: HeaderColors.dark
    }

    constructor() {
        makeAutoObservable(this)
    }

    setIsTransparent(params: HeaderStyle) {
        this.headerStyle.isTransparent = params.isTransparent;
        this.headerStyle.color = params.color;
        this.headerStyle.textColor = params.textColor;
    }
}

export default new Header();