import {makeAutoObservable} from "mobx"
import users from '../users/users.json'
import modal, { ModalType } from "./modal"

export type LoginType = {
    login: string,
    password: string
}
export type UserData = {
    name: string,
    phoneNumber: string
}

class Auth {
    isAuth: boolean = (localStorage.getItem('isAuth') == "true"?true:false) || false;

    credentials: LoginType = {
        login: "",
        password: "",
    }
    userData: UserData = {
        name: "",
        phoneNumber: ""
    }

    constructor() {
        makeAutoObservable(this)
    }

    register(_creds: LoginType) {
        modal.setErrorMessage("Данная функция пока не добавлена")
    }
    isUserExist(_creds: LoginType) {
        try {
            users.map(user => {
                if(user.login == _creds.login && user.password == _creds.password) {
                    this.setIsAuth(true)
                    this.credentials.login = _creds.login
                    this.credentials.password = _creds.password
                    this.userData.name = user.name

                    localStorage.setItem('isAuth', "true")
                    window.location.replace('#/account')

                    return
                }
                else {
                    modal.setErrorMessage("Пользователь не найден. Проверьте данные или зарегистрируйтесь")
                }
            })
        }
        catch(e) {
            console.error(e)
        }
    }
    setIsAuth(_value) {
        this.isAuth = _value
    }
}

export default new Auth();