import {makeAutoObservable} from "mobx"
import { HeaderColors, HeaderStyle } from '../../../types/types';

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