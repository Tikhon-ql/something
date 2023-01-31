import {makeAutoObservable} from "mobx"
import modal from "./modal"
import { method } from "../api/methods"

export type LoginType = {
    nickName: string,
    password: string,
    email?: string,
    firstName?: string,
    lastName?: string
}
export type UserData = {
    name: string,
    secondName: string,
    phoneNumber: string,
    userId: number
}
export type AccessType = {
    accessToken: string,
    expirationDate: string
}

class Auth {
    isAuth: boolean = (localStorage.getItem('isAuth') == "true"?true:false) || false;
    accessToken: string = "";

    userData: UserData = {
        name: "",
        secondName: "",
        phoneNumber: "",
        userId: 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    async isUserExist(_creds: LoginType, setIsLoading: Function) {
        try {
            setIsLoading(true)
            const {accessToken, expirationDate}: AccessType = (await method.login(_creds)).data;

            if(accessToken) {
                this.setIsAuth(true)
                this.accessToken = accessToken;
                localStorage.setItem('isAuth', "true")
                localStorage.setItem('accessToken', accessToken)
    
                window.location.reload();
            }
            else throw 1;
            
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
        finally {
            setIsLoading(false)
        }
    }
    setIsAuth(_value) {
        this.isAuth = _value
    }
    async registration(_regCreds: LoginType, setIsLoading: Function) {
        try {
            setIsLoading(true)
            const {accessToken, expirationDate}: AccessType = (await method.registration(_regCreds)).data;    
        }
        catch(e) {
            modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
        }
        finally {
            setIsLoading(false)
        }
    }
}

export default new Auth();