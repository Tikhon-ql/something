import {makeAutoObservable} from "mobx"
import users from '../users/users.json'
import modal, { ModalType } from "./modal"

export type LoginType = {
    login: string,
    password: string
}
export type UserData = {
    name: string,
    secondName: string
    phoneNumber: string,
    userId: number
}

class Auth {
    isAuth: boolean = (localStorage.getItem('isAuth') == "true"?true:false) || false;

    credentials: LoginType = {
        login: "",
        password: "",
    }
    userData: UserData = {
        name: "",
        secondName: "",
        phoneNumber: "",
        userId: 0
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
                    this.userData.secondName = user.secondName;
                    this.userData.phoneNumber = user.phone;

                    localStorage.setItem('isAuth', "true")
                    localStorage.setItem('authUserId', user.userId.toString())

                    window.location.replace('#/account')
                    window.location.reload();

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
    updateInfo() {
        this.userData.userId = Number(localStorage.getItem("authUserId"))

        try {
            let authUser = users.filter(user => user.userId == this.userData.userId)[0]

            this.userData.name = authUser.name;
            this.userData.secondName = authUser.secondName;
            this.userData.phoneNumber = authUser.phone;
        }
        catch(e) {
            console.error(e)
        }
    }
}

export default new Auth();